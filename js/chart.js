var totes_items = 25;
var the_catalog = [];
var item_container= document.getElementById('all_items');
var left_h2 = document.getElementById('left_pic_h2');
var middle_h2 = document.getElementById('middle_pic_h2');
var right_h2 = document.getElementById('right_pic_h2');
var left_img = document.getElementById('left_pic_img');
var middle_img = document.getElementById('middle_pic_img');
var right_img = document.getElementById('right_pic_img');
var currently_displayed_right_img;
var currently_displayed_middle_img;
var currently_displayed_left_img;

var result_container = document.getElementById('bus_results');

var Item = function(name, url){
  this.name = name;
  this.url = url;
  this.clicked_on_count = 0;
  this.votes = 0;
  this.views = 0;
  the_catalog.push(this);

};

function theCatalog() {
  var target = document.getElementById('all_items');

  var name_td = document.createElement('section');

  var name = document.createElement('h2');
  name.textContent = the_catalog[0];
  name_td.appendChild(name);

  target.appendChild(name_td);
}

var render_chart = function(){
  var canvas_el = document.getElementById('bus_results');
  var ctx = canvas_el.getContext('2d');

  var item_click_data = [];
  var item_click_labels = [];

  for (var i = 0; i < the_catalog.length; i++) {
    item_click_data.push(the_catalog[i].clicked_on_count);
    item_click_labels.push(the_catalog[i].name);
  }
  
  newChart(item_click_data, item_click_labels, 'Item Data', ctx);
};

var newChart = function(item_click_data,item_click_labels,VotesPerItem,ctx) {
  new Chart(ctx, {//eslint-disable-line no-undef
    type: 'bar',
    data: {
      labels: item_click_labels,
      datasets: [{
        label: VotesPerItem,
        data: item_click_data,
        backgroundColor: [
          'rgba(255, 99, 132, .9)',
          'rgba(54, 162, 235, .9)',
          'rgba(255, 206, 86, .9)',
          'rgba(75, 192, 192, .9)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .9)',
          'rgba(12, 75, 230, .9)',
          'rgba(78, 178, 212, .9)',
          'rgba(255, 0, 255, .9)',
          'rgba(195, 172, 202, .9)',
          'rgba(1, 18, 255, .9)',
          'rgba(56, 94, 187, .9)',
          'rgba(243, 118, 90, .9)',
          'rgba(70, 70, 70, .9)',
          'rgba(127, 127, 127, .9)',
          'rgba(96, 102, 105 .9)',
          'rgba(5, 100, 15, .9)',
          'rgba(100, 100, 100, .9)',
          'rgba(100, 127, 255, .9)',
          'rgba(207, 16, 4, .9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(12, 75, 230, .9)',
          'rgba(78, 178, 212, .9)',
          'rgba(255, 0, 255, .9)',
          'rgba(195, 172, 202, .9)',
          'rgba(1, 18, 255, .9)',
          'rgba(56, 94, 187, .9)',
          'rgba(243, 118, 90, .9)',
          'rgba(70, 70, 70, .9)',
          'rgba(127, 127, 127, .9)',
          'rgba(96, 102, 105 .9)',
          'rgba(5, 100, 15, .9)',
          'rgba(100, 100, 100, .9)',
          'rgba(100, 127, 255, .9)',
          'rgba(207, 16, 4, .9)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};
var render_item = function(item,target_img,target_h2){
  target_img.src = item.url;
  target_h2.textContent = item.name;
};

var handle_click_on_item = function (event) {
  if(event.target.tagName === 'IMG'){
    if(event.target.id === 'left_pic_img'){
      currently_displayed_left_img.clicked_on_count ++;
    } if(event.target.id === 'middle_pic_img'){
      currently_displayed_left_img.clicked_on_count ++;
    } else if (event.target.id === 'right_pic_img'){
      currently_displayed_right_img.clicked_on_count ++;
    }

    var pick_new_items = function (){
      var left_pic_idx= Math.floor(Math.random()* the_catalog.length);
      var middle_pic_idx= Math.floor(Math.random()* the_catalog.length);
      var right_pic_idx= Math.floor(Math.random()* the_catalog.length);

      currently_displayed_left_img = the_catalog[left_pic_idx];
      currently_displayed_middle_img = the_catalog[middle_pic_idx];
      currently_displayed_right_img = the_catalog[right_pic_idx];

      render_item(the_catalog[left_pic_idx],left_img, left_h2);
      render_item(the_catalog[middle_pic_idx],middle_img, middle_h2);
      render_item(the_catalog[right_pic_idx], right_img, right_h2);
    };

    totes_items --;
    pick_new_items();
    if(totes_items <=0){
      item_container.removeEventListener('click', handle_click_on_item);
      newChart();
    }
  }
};

var click_count_section = document.createElement('article');

var left_clicks = document.createElement('p');
left_clicks.textContent = all_items[left_pic_idx].num_times_clicked;
click_count_section.appendChild(left_clicks);

var middle_clicks = document.createElement('p');
middle_clicks.textContent = all_items[middle_pic_idx].num_times_clicked;
click_count_section.appendChild(middle_clicks);

var right_clicks = document.createElement('p');
right_clicks.textContent = all_items[right_img_idx].num_times_clicked;
click_count_section.appendChild(right_clicks);

new Item ('R2D2 Travel Case', 'bag.jpg');
new Item ('Cathulu Action Figure', 'cthulhu.jpg ');
new Item ('Tentical 128GB USB 3.0 Thumbdrive', 'usb.gif');
new Item ('Banana Cutter','banana.jpg' );
new Item ('Ipad Bathroom stand', 'bathroom.jpg');
new Item ('Yellow rainboots', 'boots.jpg');
new Item ('Multitasking Breakfast maker', 'breakfast.jpg');
new Item ('Meatball Flavored Gum', 'bubblegum.jpg');
new Item ('Plastic Kid Chair', 'chair.jpg');
new Item ('Dog Duck Mask', 'dog-duck.jpg');
new Item ('Red Drake Meat', 'dragon.jpg');
new Item ('Utensil Pens', 'pen.jpg');
new Item ('Pet Sweeping Boots', 'pet-sweep.jpg');
new Item ('Scissors with Pizza Cutter', 'scissors.jpg');
new Item ('Shark Sleeping Bag', 'shark.jpg');
new Item ('Kids Sweeper Brissle onsie', 'sweep.png');
new Item ('Ram sleeping bag', 'Tauntaun.jpg');
new Item ('Unicorn Meat', 'unicorn.jpg');
new Item ('Inverted Watering can', 'water-can.jpg');
new Item ('Wine Glass', 'wine-glass.jpg');

currently_displayed_left_img = the_catalog[0];
currently_displayed_middle_img = the_catalog[1];
currently_displayed_right_img = the_catalog[2];

item_container.addEventListener('click', handle_click_on_item);

