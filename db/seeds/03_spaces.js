const TABLE_NAME = 'spaces'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: "Nice basement", description: 'Indoor, temperature controlled space for your precious belongings.  Heating and cooling available.  24/7 access through large metal doors.  Spacious enough for any of your belongings.  Contact host if you have any questiosn.', img_link: 'https://images.unsplash.com/photo-1520615893238-4b864f6d16b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90fe505a1015c64ab137e64b72bb6aa4&auto=format&fit=crop&w=2866&q=80', hosts_id: 1, address: '111 South Jackson Street', city: 'Seattle', state: 'WA', zip: 98104, lat: 47.598976, lng: -122.333787, temp_control: true, access: true, size: 250, price: 10, active: true, deleted_at: null},
        {id: 2, name: "Mom's attic", description: 'Cozy attic space for short-term storage.  24-hour notice is required to access the space.', img_link: 'https://static1.squarespace.com/static/56db8cdacf80a1b2c9a515ed/56e43e899f7266415869cc39/5726da42f8baf385ff65ff1f/1462164641782/FinishedAttic-Empty-shutterstock_383786185.jpg?format=1500w', hosts_id: 3, address: '5415 65th Ave W', city: 'Seattle', state: 'WA', zip: 98467, lat: 47.675535, lng: -122.268995, temp_control: false, access: false, size: 150, price: 7, active: true, deleted_at: null},
        {id: 3, name: 'Spacious Clean Garage', description: "A nice garage for storing boxes and furniture.  Approximately 15'x10'", img_link: 'https://images.unsplash.com/photo-1468664093569-795a12e8b31c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f051f4d8dd0361db6c3721dfdc82bbea&auto=format&fit=crop&w=2850&q=80', hosts_id: 2, address: '6513 44th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, lat: 47.676227, lng: -122.281182, temp_control: false, access: true, size: 150, price: 5, active: true, deleted_at: null},
        {id: 4, name: 'Outdoor shed', description: 'Small shed for a number of boxes.  Perfect for college students.', img_link: 'https://images.unsplash.com/photo-1468802424679-73df7d3d467e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=852c15dc5bf2a0e23c8730f1fd9fb5ef&auto=format&fit=crop&w=2850&q=80', hosts_id: 3, address: '8232 15th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, lat: 47.689463, lng: -122.311888, temp_control: false, access: true, size: 50, price: 3, active: true, deleted_at: null},
        {id: 5, name: 'Spare bedroom', description: 'Spare apartment bedroom available for shared storage', img_link: 'https://images.unsplash.com/photo-1519119668-e2ea8e7278f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0400754496d315f757fa8c43152b10cd&auto=format&fit=crop&w=2767&q=80', hosts_id: 4, address: '4710 University Way NE', city: 'Seattle', state: 'WA', zip: 98105, lat: 47.663376, lng: -122.312603, temp_control: true, access: false, size: 90, price: 4, active: true, deleted_at: null},
        {id: 6, name: "Office Space for Storage", description: 'A vacant open office space that can be used for storage.  It is approximately 15x10ft.  Clean and easy access.', img_link: 'http://office-envy.com/wp-content/uploads/2014/03/Loft227-Empty-Space-Full-Day.jpg', hosts_id: 5, address: '4106 12th Ave NE', city: 'Seattle', state: 'WA', zip: 98105, lat: 47.657107, lng: -122.315259, temp_control: true, access: false, size: 150, price: 8, active: true, deleted_at: null},
        {id: 7, name: "Storage Room in Kent Warehouse", description: "We're a small start-up that has an unused 5x5 ft office for storage.  We can reduce the size of the room as well which would then be shared. ", img_link: 'https://socialpantry.co.uk/wp-content/uploads/2017/03/HH-Empty-Office-space-copy-1024x768.jpg', hosts_id: 4, address: '6013 S 194th St', city: 'Kent', state: 'WA', zip: 98032, lat: 47.427924, lng: -122.261304, temp_control: false, access: false, size: 25, price: 5, active: true, deleted_at: null},
        {id: 8, name: "Outdoor Storage Shed", description: "Large outdoor shed available for rental.  Access through side gate.", img_link: 'https://www.steeltechsheds.ie/wp-content/gallery/garages-2017/26ft-x-17ft-garage.jpg', hosts_id: 1, address: '109 NE 61st St,', city: 'Seattle', state: 'WA', zip: 98115, lat: 47.672734, lng: -122.327645, temp_control: false, access: false, size: 442,
        price: 12,
        active: true,
        deleted_at: null},
        {id: 9,
          name: "Open studieo space in I District",
          description: "Large loft space for your storage needs.  Located in International District near downtown.  Approximately 15'x15'.  24-hour notice required.  Please let me know if you have any questions.",
          img_link: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/6/11/0/HSTAR802_loft-living-room-before_h.jpg.rend.hgtvcom.1280.960.suffix/1400978511814.jpeg',
          hosts_id: 1,
          address: '109 NE 61st St,',
          city: 'Seattle',
          state: 'WA',
          zip: 98104,
          lat: 47.59908075,
          lng: -122.3255913,
          temp_control: false,
          access: false,
          size: 250,
          price: 12,
          active: true,
          deleted_at: null},
        {id: 10,
          name: "Spacious Studio Near Pioneer Square",
          description: "Your private studio is a daylight basement apartment, and comes with a full living room for wonderful storage.  Come stay here!",
          img_link:  "http://rvaloanofficer.com/wp-content/uploads/2017/01/crazy-empty-studio-apartments-12c97309d25aceacf290c6b1b0a62c0ejpg.jpg",
          hosts_id: 4,
          address: '109 NE 61st St,',
          city: 'Seattle',
          state: 'WA',
          zip: 98104,
          lat: 47.60100575,
          lng: -122.3243953,
          temp_control: false,
          access: false,
          size: 250,
          price: 12,
          active: true,
          deleted_at: null},
        {id: 11,
          name: "Spacious Bright Storage Space",
          description: "We purchased this condo in 2011.  There is a spare wing that we do not use.  It is available for your storage needs.  Located in Belltown near downtown.",
          img_link:  "https://i.pinimg.com/originals/e0/bf/64/e0bf64ffa5c61ecb83edd98aeabf1f03.jpg",
          hosts_id: 4,
          address: '109 NE 61st St,',
          city: 'Seattle',
          state: 'WA',
          "zip": 98121,
          "lat": 47.61533865,
          "lng": -122.3479053,
          temp_control: false,
          access: false,
          size: 250,
          price: 12,
          active: true,
          deleted_at: null},
        {id: 12,
          "name": "Empty bedroom availalbe for storage",
          description: "**** 1 mile from downtown Seattle **** Located in Capitol Hill.  In a safe neighborhood.  Easy 24/7 access. Approximately 12'x12'",
          img_link: 'https://sites.google.com/a/share.brevardschools.org/digital-design-digital-media/_/rsrc/1471522977473/empty-room/EmptyRoom.jpg',
          hosts_id: 4,
          address: '109 NE 61st St,',
          city: 'Seattle',
          state: 'WA',
          zip: 98102,
          lat: 47.62236602,
          lng: -122.315918,
          temp_control: false,
          access: true,
          size: 150,
          price: 12,
          active: true,
          deleted_at: null},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
