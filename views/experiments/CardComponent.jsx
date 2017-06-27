/**
 * @fileOverview
 * @name CardComponent.jsx
 * @author 
 * @license 
 */
var MapCard = React.createClass({
            render: function() {
                return (<div className="card">
                    <div className="content">
                        <h2>{this.props.Name}</h2>
                        <p><i className="material-icons">Address_on</i>{this.props.Address}</p>
                        <a href="{this.props.URL}">Click Here to go to the Website</a>
                        <p id="small">Categories</p>
                        <div className="tags"></div>
                    </div>
                    <div className="map">
                        <iframe width="300" height="300" frameBorder="0" src={'https://www.google.com/maps/embed/v1/place?q=place_id:'  + this.props.place_id + '&key=AIzaSyDdkO3Rp47s2wXOYMKUSv3x6hI3O07PdRA' } allowFullScreen></iframe>
                    </div>
                </div>);
            }
        });

        function getPromiseFromData(data){

            var austin_loc = new google.maps.LatLng(30.2672,-97.7431);
            var MILES = 5;
            var METERSinMILES = 1609;

            var request = {
                location: austin_loc,
                radius: METERSinMILES * MILES,
                query: data.Name
            };

            var mapObj = new google.maps.Map(document.getElementById('dummy_map'));
            var places_service = new google.maps.places.PlacesService(mapObj);
            console.log('data');
            console.log(data);

            //syntactic sugar
            var searchPromise = new Promise(function(resolve,reject){

              function searchCallback(results, status) {
                  if (status === google.maps.places.PlacesServiceStatus.OK) {
                      if(results.length > 0){

                          console.log('result[0]');
                          console.log(results[0]);
                          console.log(results[0].place_id);
                          data.place_id = results[0].place_id;
                          //should be bound by this
                          resolve(data);

                      }
                  }
                  reject();
              };//end searchCallback

                places_service.textSearch(request,searchCallback);
            });//end searchPromise

            /* searchPromise.then(function(){
             *   return (<MapCard {...data } key={'' + index}></MapCard> );
             * });*/
            return searchPromise;

        }

        function populate_div(filtered_data,elmID){

            var allSearchPromises = filtered_data.map(function(item){
                return getPromiseFromData(item);
                }
            );//end allcards definition

            var allcards = [];
            Promise.all(allSearchPromises).then(function(iterable){
                iterable.map(function(data,index){
                  allcards.push( (<MapCard {...data } key={'' + index}></MapCard>));
                });

                React.render((<div>{allcards}</div>), document.getElementById(elmID));
            });


        };
