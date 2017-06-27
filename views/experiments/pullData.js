function pullFromTable(doc_url, requirements) {

    var result_promise = new Promise(function(resolve, reject) {

        sheetrock({
            url: doc_url,
            query: "select *",
            callback: placeData
        });

        Array.prototype.clean = function(deleteValue) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == deleteValue) {
                    this.splice(i, 1);
                    i--;
                }
            }
            return this;
        };

        function placeData(error, options, response, needed_values) {
            var filtered_data = {};

            if (error) {
                console.log('ERROR IN PLACE DATA');
                console.log(error);
            } else {

                var id_num = 0;
                labels = response.rows[0].cellsArray;

                filtered_data = response.rows.map(function(row) {

                    dat = row.cellsArray;
                    var location_dat = {};
                    location_dat['id'] = id_num;

                    //map the label to the value
                    for (var ind = 0; ind < dat.length; ++ind) {
                        location_dat[labels[ind]] = dat[ind];
                    }

                    //return null for any objects that don't meet the requirements
                    var keys = Object.keys(location_dat);
                    for (var ind = 0; ind < requirements.length; ++ind) {
                        //If the objects requirement value is null for something that's required..
                        if (!location_dat[requirements[ind]]) {
                            return null;
                        }
                    }

                    id_num += 1;
                    return location_dat;
                });
                filtered_data.clean(null);

                //remove the first element because it's just a bunch of names instead of data. 
                filtered_data.shift();
                console.log(filtered_data);

                //do something with filtered data.
                // hackathons let you commit crimes - (past)Oliver Croomes
                // this code is a crime.
                resolve(filtered_data);

            }

        }

    }); //end promise

    return result_promise;
} //end function
