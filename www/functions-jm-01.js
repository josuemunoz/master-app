// JavaScript Document




var myApp =
{
	x: function(y){
		return xyc = document.getElementById(y); 
		},
		
	setTextNode: function(node, insert){
		this.node	= node
		this.insert = insert;
		},
	textNode: function(){
		var node = document.createTextNode(this.node);
			x(this.insert).appendChild(node);
		}
}
	
var x = function(y){ return xyc = document.getElementById(y); }

function image(imageFilename, node, insert)
	{
		this.imageFilename = imageFilename;
		this.node = node;
		this.insert = insert;
	}

image.prototype.create = function create()
	{
		
		var img = document.createElement("img");
			console.warn(this.imageFilename+this.node);
			img.setAttribute("alt", this.node);
			img.setAttribute("src", this.imageFilename);
			x(this.insert).appendChild(img);
	}

function phoneNumber(number, node)
	{
		this.number = number;
		this.node = node;
	}

phoneNumber.prototype.call = function call()
	{
		//alert(this.node +" "+ this.number);
		textnode = document.createTextNode(this.node +" "+ this.number);  
		createLink(this.number, this.node);	
	}

phoneNumber.prototype.sms = function sms()
	{
		//alert(this.node +" "+ this.number);
			
	}
	 
function createLink(number, node)
	{
		var a = document.createElement("a");
		a.setAttribute("src", "sms:"+number);
		a.innerHTML = node;
		//x("status").appendChild(a);

	}

getUrl.prototype.clearPage = function clearPage(){
		x("b").innerHTML = "";
	}

function getUrl(url, type, id, node, page)
	{
		this.url  = url;
		this.type = type;
		this.id = id;
		this.node = node;
		this.page = page;
	}
	
getUrl.prototype.linkCreate = function linkCreate(){
		
		
		var a = document.createElement("a");
			a.setAttribute("href", this.page);
			a.setAttribute("id", this.id);
			a.setAttribute("url2", this.url);
		var li = document.createElement("li");
			li.appendChild(a);
			a.innerHTML = this.node;
			x("mylistB").appendChild(li);
			$("#mylistB").listview('refresh');
			
			
			
	}



getUrl.prototype.car = function car(){
	
				
				//alert(this.url);
				var url = this.url;
				
				//a.onclick = function(){
					x("car").onclick = function(){
				//alert(url);
				x('b').innerHTML = "";
				var ajax = new XMLHttpRequest();
				ajax.open("POST", url ,true);
				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajax.onreadystatechange = function(){
						if(ajax.readyState == 4 & ajax.status == 200){
							//alert(ajax.responseText.lenght);
							var a = JSON.parse(ajax.responseText);
								
								for(var i=0; i<a.length; i++){
								console.log(a[i].model);
								createImage(a[i].image, a[i].userid, a[i].model, a[i].year);
						}
					}
				}
				//ajax.send("appSettings=true&phoneOnAllPages="+y.value+"&id="+getUserId());
				ajax.send();
			}
				
		}

function createImage(image, userid, model, year){
	
	var img = document.createElement('img'); var span = document.createElement("span");
	//alert(model.length)
		if(model.length > 10){
			var m = model.substring(0,9)+"...";
			}else{
				var m = model;
				}
	var textNode = document.createTextNode(year+ " "+ m.toUpperCase());
		span.setAttribute("id", "title");
		span.appendChild(textNode);
	var li = document.createElement('li');
		img.setAttribute("src", "http://www.salecarro.com/assets/cars_for_sale/"+userid+"/_small"+image);
		li.appendChild(img);
		li.appendChild(span);
		x("b").appendChild(li);
}

	function module(){
			$.getJSON(yeahBaby()+"mobile/"+thePath()+"/module.json", function(data){
					var a = ["call", "sms", "image", "textNode", "car", "LINK"];
					console.log(data.length+"**************************************");
					for(var i=0; i<data.length; i++){
 
						switch (data[i].module) {
						
						//fix
							case "call":
							var phone = new phoneNumber(data[i].number, data[i].node);
								phone.call();
								break;
						//fix
							case "sms":
							var phone = new phoneNumber("619-316-9904", "text us");
								phone.sms();
								break;
						
							case "image":
							var img = new image(data[i].imageFilename, data[i].node, data[i].insert);
							  	img.create();
								break;
								
							case "textNode":
								myApp.setTextNode(data[i].node, data[i].insert);
								myApp.textNode();
								break;
								
						//fix
							case "car":
							var Url = new getUrl('http://www.salecarro.com/api/index.php', 'car', "car", data[i].node , "#carPage");
								Url.linkCreate();
								Url.car();
								break;
							} 
						}
					
				});
			
		//function(){}	
		
				
		}



			

	
	
