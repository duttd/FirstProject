$(document).ready(function () {
                $.ajax({
                    type: "GET",
                    url: "flight.xml",
                    dataType: "xml",
                    success: parseXML,
                    
					});

				});
				
				function parseXML(xml) {
                $(xml).find('destination').each(function () {
					if($(this).attr('name') == 'New Delhi'){
						$("#city1").append("<img src='" + $(this).find("picture").attr("src") + "'>");
                        $("#city1").append("<li> City: " + $(this).find("city").text() + "</li>");
						$("#city1").append("<li> Country: " + $(this).find("country").text() + "</li>");
						$("#city1").append("<li> Description: " + $(this).find("description").text() + "</li>");
						$("#city1").append("<li> Airline: " + $(this).find("airline").text() + "</li>");
						$("#city1").append("<li> Time: " + $(this).find("time").text() + "</li>");
						$("#city1").append("<li> Cost: " + $(this).find("cost").text() + "</li>");
                    }
					if($(this).attr('name') == 'Melbourne'){
						$("#city2").append("<img src='" + $(this).find("picture").attr("src") + "'>");
                        $("#city2").append("<li> City: " + $(this).find("city").text() + "</li>");
						$("#city2").append("<li> Country: " + $(this).find("country").text() + "</li>");
						$("#city2").append("<li> Description: " + $(this).find("description").text() + "</li>");
						$("#city2").append("<li> Airline: " + $(this).find("airline").text() + "</li>");
						$("#city2").append("<li> Time: " + $(this).find("time").text() + "</li>");
						$("#city2").append("<li> Cost: " + $(this).find("cost").text() + "</li>");
                    }
					
					if($(this).attr('name') == 'Barcelona'){
						$("#city3").append("<img src='" + $(this).find("picture").attr("src") + "'>");
                        $("#city3").append("<li> City: " + $(this).find("city").text() + "</li>");
						$("#city3").append("<li> Country: " + $(this).find("country").text() + "</li>");
						$("#city3").append("<li> Description: " + $(this).find("description").text() + "</li>");
						$("#city3").append("<li> Airline: " + $(this).find("airline").text() + "</li>");
						$("#city3").append("<li> Time: " + $(this).find("time").text() + "</li>");
						$("#city3").append("<li> Cost: " + $(this).find("cost").text() + "</li>");
                    }
					
					
					
                    
                });
                
            }