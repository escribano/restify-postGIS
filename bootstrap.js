var config      = require('config'),
    postgresql  = require('pg')

var pg_config   = config.pg_config,
    table_name  = config.table_name;

var pg          = new postgresql.Client( pg_config + '/' +table_name );

pg.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  // Enable the postgis extension
  pg.query('CREATE EXTENSION postgis;', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    // Create our DB table
    pg.query("CREATE TABLE "+table_name+" ( gid serial NOT NULL, name character varying(240), the_geom geometry, CONSTRAINT "+table_name+ "_pkey PRIMARY KEY (gid), CONSTRAINT enforce_dims_geom CHECK (st_ndims(the_geom) = 2), CONSTRAINT enforce_geotype_geom CHECK (geometrytype(the_geom) = 'POINT'::text OR the_geom IS NULL),CONSTRAINT enforce_srid_geom CHECK (st_srid(the_geom) = 4326) ) WITH ( OIDS=FALSE );", function(err, result) {
      if(err) {
        return console.error('error creating table', err);
      }
      console.dir(result);
      // Add an index to our db table
      pg.query("CREATE INDEX "+table_name+"_geom_gist ON "+table_name+"USING gist (the_geom);", function(err, result) {
        if(err) {
          return console.error('error adding index', err);
        }
        console.dir(result);
        // Insert our mapping data
        new_map_points = "Insert into "+db_table+" (name, the_geom) VALUES ('Abraham Lincoln Birthplace National Historical Park', ST_GeomFromText('POINT(-85.7302 37.5332)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Abraham Lincoln National Cemetery', ST_GeomFromText('POINT(-88.12595 41.3896)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Acadia National Park', ST_GeomFromText('POINT(-68.04902 44.454)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Adams National Historical Park', ST_GeomFromText('POINT(-71.01119 42.25639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Admiralty Island National Monument', ST_GeomFromText('POINT(-134.16105 57.61806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('African American Civil War Memorial', ST_GeomFromText('POINT(-77.02569 38.91639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('African Burial Ground National Monument', ST_GeomFromText('POINT(-73.99364 40.71367)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Agate Fossil Beds National Monument', ST_GeomFromText('POINT(-103.75492 42.42428)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Agua Fria National Monument', ST_GeomFromText('POINT(-112.07633 34.15417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('AIDS Memorial Grove', ST_GeomFromText('POINT(-122.46122 37.77)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ala Kahakai National Historic Trail', ST_GeomFromText('POINT(-155.68106 18.91111)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Alagnak River', ST_GeomFromText('POINT(-156.79582 59.01063)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Aleutian World War II National Historic Area', ST_GeomFromText('POINT(-166.52692 53.88889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Alibates Flint Quarries National Monument', ST_GeomFromText('POINT(-101.66722 35.57139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Allegheny Portage Railroad', ST_GeomFromText('POINT(-78.5401 40.45417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('American Memorial Park', ST_GeomFromText('POINT(145.71691 15.2181)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Amistad National Recreation Area', ST_GeomFromText('POINT(-101.04972 29.43667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Anacostia Park', ST_GeomFromText('POINT(-76.89998 38.8)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Andersonville National Cemetery', ST_GeomFromText('POINT(-84.13093 32.20358)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Andersonville National Historic Site', ST_GeomFromText('POINT(-84.12686 32.19759)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Andrew Johnson National Cemetery', ST_GeomFromText('POINT(-82.83763 36.15527)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Andrew Johnson National Historic Site', ST_GeomFromText('POINT(-82.83482 36.15833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Aniakchak National Monument and Preserve', ST_GeomFromText('POINT(-158.14972 56.9)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Antietam National Battlefield', ST_GeomFromText('POINT(-77.73945 39.4803)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Antietam National Cemetery', ST_GeomFromText('POINT(-77.73904 39.47914)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Apostle Islands National Lakeshore', ST_GeomFromText('POINT(-90.66402 46.96528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Appomattox Court House National Historical Park', ST_GeomFromText('POINT(-78.80083 37.37845)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Arches National Park', ST_GeomFromText('POINT(-109.56462 38.77)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Arkansas Post National Memorial', ST_GeomFromText('POINT(-91.34347 34.02361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Arlington House The Robert E. Lee Memorial', ST_GeomFromText('POINT(-77.07389 38.88275)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Arlington National Cemetery', ST_GeomFromText('POINT(-77.07122 38.87657)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Assateague Island National Seashore', ST_GeomFromText('POINT(-75.20818 38.08332)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Aulavik National Park', ST_GeomFromText('POINT(-119.74092 74.02249)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Auyuittuq National Park', ST_GeomFromText('POINT(-65.01638 67.88333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Aztec Ruins National Monument', ST_GeomFromText('POINT(-107.99782 36.83583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Badlands National Park', ST_GeomFromText('POINT(-102.43392 43.6504)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bandelier National Monument', ST_GeomFromText('POINT(-106.32082 35.77888)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Banff National Park', ST_GeomFromText('POINT(-115.54962 51.16666)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Battleground National Cemetery', ST_GeomFromText('POINT(-73.96286 40.81333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Benjamin Franklin National Memorial', ST_GeomFromText('POINT(-75.17286 39.95832)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bent''s Old Fort National Historic Site', ST_GeomFromText('POINT(-103.42502 38.04045)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bering Land Bridge National Preserve', ST_GeomFromText('POINT(-164.80842 66.05595)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Big Bend National Park', ST_GeomFromText('POINT(-103.06042 29.81874)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Big Cypress National Preserve', ST_GeomFromText('POINT(-81.0337 25.85889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Big Hole National Battlefield', ST_GeomFromText('POINT(-113.64332 45.6375)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Big South Fork National River and Recreation Area', ST_GeomFromText('POINT(-84.69835 36.4865)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Big Thicket National Preserve', ST_GeomFromText('POINT(-94.41082 30.27567)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bighorn Canyon National Recreation Area', ST_GeomFromText('POINT(-108.13032 45.19444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Biscayne National Park', ST_GeomFromText('POINT(-80.26162 25.442)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Black Canyon of the Gunnison National Park', ST_GeomFromText('POINT(-107.72792 38.58491)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Blue Ridge Parkway', ST_GeomFromText('POINT(-80.93578 36.51861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bluestone National Scenic River', ST_GeomFromText('POINT(-80.99901 37.54167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Booker T. Washington National Monument', ST_GeomFromText('POINT(-79.76564 37.12333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Boston African American National Historic Site', ST_GeomFromText('POINT(-71.06454 42.36)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Boston Harbor Islands National Recreation Area', ST_GeomFromText('POINT(-70.94565 42.31861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Boston National Historical Park', ST_GeomFromText('POINT(-71.05617 42.36)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Brices Cross Roads National Battlefield Site', ST_GeomFromText('POINT(-88.7284 34.50672)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Brown v. Board of Education National Historic Site', ST_GeomFromText('POINT(-95.67621 39.03806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bruce Peninsula National Park', ST_GeomFromText('POINT(-81.61388 45.23888)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Bryce Canyon National Park', ST_GeomFromText('POINT(-112.19632 37.5548)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Buck Island Reef National Monument', ST_GeomFromText('POINT(-64.61897 17.78694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Buffalo National River', ST_GeomFromText('POINT(-92.42606 36.17806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cabrillo National Monument', ST_GeomFromText('POINT(-117.24202 32.67352)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('California Coastal National Monument', ST_GeomFromText('POINT(-122.17994 36.89)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Canaveral National Seashore', ST_GeomFromText('POINT(-80.77679 28.7675)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cane River Creole National Historical Park', ST_GeomFromText('POINT(-93.00343 31.66684)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Canyon de Chelly National Monument', ST_GeomFromText('POINT(-109.46912 36.1336)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Canyonlands National Park', ST_GeomFromText('POINT(-109.88072 38.261)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Canyons of the Ancients National Monument', ST_GeomFromText('POINT(-108.99994 37.37)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Breton Highlands National Park', ST_GeomFromText('POINT(-60.8111 46.81611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Cod National Seashore', ST_GeomFromText('POINT(-70.20513 42.07389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Hatteras National Seashore', ST_GeomFromText('POINT(-75.51123 35.30361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Henry Memorial', ST_GeomFromText('POINT(-76.00819 36.92806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Krusenstern National Monument', ST_GeomFromText('POINT(-163.50002 67.41333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cape Lookout National Seashore', ST_GeomFromText('POINT(-76.53624 34.60528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Capitol Reef National Park', ST_GeomFromText('POINT(-111.23862 38.27617)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Captain John Smith Chesapeake National Historic Trail', ST_GeomFromText('POINT(-75.99995 38)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Capulin Volcano National Monument', ST_GeomFromText('POINT(-103.96972 36.78222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Carl Sandburg Home National Historic Site', ST_GeomFromText('POINT(-82.45149 35.26778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Carlsbad Caverns National Park', ST_GeomFromText('POINT(-104.40902 32.1648)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Carrizo Plain', ST_GeomFromText('POINT(-119.74994 35.16)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Carter G. Woodson Home National Historic Site', ST_GeomFromText('POINT(-77.02399 38.90999)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Casa Grande Ruins National Monument', ST_GeomFromText('POINT(-111.53162 32.99517)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cascade-Siskiyou National Monument', ST_GeomFromText('POINT(-122.46105 42.07778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Castillo de San Marcos National Monument', ST_GeomFromText('POINT(-81.31153 29.89775)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Castle Clinton National Monument', ST_GeomFromText('POINT(-74.01674 40.7036)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Catoctin Mountain Park', ST_GeomFromText('POINT(-77.46665 39.64833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cedar Breaks National Monument', ST_GeomFromText('POINT(-112.84612 37.64519)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cedar Creek and Belle Grove National Historical Park', ST_GeomFromText('POINT(-78.30063 39.16749)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chaco Culture National Historical Park', ST_GeomFromText('POINT(-107.95862 36.05833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chalmette National Cemetery', ST_GeomFromText('POINT(-89.98648 29.94417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chamizal National Memorial', ST_GeomFromText('POINT(-106.45402 31.76778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Channel Islands National Park', ST_GeomFromText('POINT(-119.74212 34.0394)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Charles Pinckney National Historic Site', ST_GeomFromText('POINT(-79.82454 32.84611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chattahoochee River National Recreation Area', ST_GeomFromText('POINT(-84.32454 33.98722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chesapeake and Ohio Canal National Historical Park', ST_GeomFromText('POINT(-77.05744 38.89972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chicago Portage National Historic Site', ST_GeomFromText('POINT(-87.80676 41.80556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chickamauga and Chattanooga National Military Park', ST_GeomFromText('POINT(-85.25984 34.94)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chickasaw National Recreation Area', ST_GeomFromText('POINT(-96.97204 34.50056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chimney Rock National Historic Site', ST_GeomFromText('POINT(-103.34792 41.70368)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Chiricahua National Monument', ST_GeomFromText('POINT(-109.34802 32.01778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Christiansted National Historic Site', ST_GeomFromText('POINT(-64.70204 17.74693)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('City of Rocks National Reserve', ST_GeomFromText('POINT(-113.70366 42.07727)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Clara Barton National Historic Site', ST_GeomFromText('POINT(-77.14065 38.96694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Colonial National Historical Park', ST_GeomFromText('POINT(-76.5084 37.21926)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Colonial Parkway', ST_GeomFromText('POINT(-76.71576 37.21557)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Colorado National Monument', ST_GeomFromText('POINT(-108.68582 39.04249)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Congaree National Park', ST_GeomFromText('POINT(-80.78308 33.78333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Coronado National Memorial', ST_GeomFromText('POINT(-110.25602 31.3455)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cowpens National Battlefield', ST_GeomFromText('POINT(-81.8179 35.13667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Crater Lake National Park', ST_GeomFromText('POINT(-122.10872 42.943)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Craters of the Moon National Monument and Preserve', ST_GeomFromText('POINT(-113.51642 43.41667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cumberland Gap National Historical Park', ST_GeomFromText('POINT(-83.68703 36.60417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cumberland Island National Seashore', ST_GeomFromText('POINT(-81.44985 30.83333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Curecanti National Recreation Area', ST_GeomFromText('POINT(-107.32672 38.45472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Custer National Cemetery', ST_GeomFromText('POINT(-107.43165 45.56953)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Cuyahoga Valley National Park', ST_GeomFromText('POINT(-81.55677 41.20906)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('David Berger National Memorial', ST_GeomFromText('POINT(-81.49236 41.47472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Dayton Aviation Heritage National Historical Park', ST_GeomFromText('POINT(-84.0887 39.79472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('De Soto National Memorial', ST_GeomFromText('POINT(-82.64429 27.52389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Death Valley National Park', ST_GeomFromText('POINT(-117.09872 36.524)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap National Recreation Area', ST_GeomFromText('POINT(-75.01726 41.08232)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap National Recreation Area', ST_GeomFromText('POINT(-75.00416 41.08996)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap National Recreation Area', ST_GeomFromText('POINT(-74.89562 41.14625)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap National Recreation Area', ST_GeomFromText('POINT(-74.80594 41.30989)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap National Recreation Area Boat Launch', ST_GeomFromText('POINT(-74.98472 41.10718)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Delaware Water Gap NRA Store & Campground', ST_GeomFromText('POINT(-74.87387 41.21144)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Denali National Park', ST_GeomFromText('POINT(-149.98632 63.54357)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Denali National Park and Preserve', ST_GeomFromText('POINT(-150.49972 63.33333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Devils Postpile National Monument', ST_GeomFromText('POINT(-119.08412 37.62444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Devils Tower National Monument', ST_GeomFromText('POINT(-104.71502 44.59028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Dinosaur National Monument', ST_GeomFromText('POINT(-108.98302 40.53333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Dry Tortugas National Park', ST_GeomFromText('POINT(-81.7859 24.6384)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('East Potomac Park', ST_GeomFromText('POINT(-77.0259 38.87)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ebey''s Landing National Historical Reserve', ST_GeomFromText('POINT(-122.68951 48.21341)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Edgar Allan Poe National Historic Site', ST_GeomFromText('POINT(-75.15011 39.96167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Effigy Mounds National Monument', ST_GeomFromText('POINT(-91.18537 43.08861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Eisenhower National Historic Site', ST_GeomFromText('POINT(-77.26316 39.79332)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('El Malpais National Monument', ST_GeomFromText('POINT(-107.95752 34.87635)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('El Morro National Monument', ST_GeomFromText('POINT(-108.35302 35.03833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Eleanor Roosevelt National Historic Site', ST_GeomFromText('POINT(-73.93511 41.78582)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Elk Island National Park', ST_GeomFromText('POINT(-112.87042 53.59277)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ellis Island National Monument', ST_GeomFromText('POINT(-74.03937 40.69956)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Eugene O''Neill National Historic Site', ST_GeomFromText('POINT(-122.02942 37.82444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Everglades National Park', ST_GeomFromText('POINT(-80.79976 25.36)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Father Marquette National Memorial', ST_GeomFromText('POINT(-84.71708 45.85167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Federal Hall', ST_GeomFromText('POINT(-74.01014 40.70722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fire Island National Seashore', ST_GeomFromText('POINT(-72.98263 40.69639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('First Ladies National Historic Site', ST_GeomFromText('POINT(-81.37511 40.79667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Flight 93 National Memorial', ST_GeomFromText('POINT(-78.9076 40.05615)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Florissant Fossil Beds National Monument', ST_GeomFromText('POINT(-105.26744 38.91806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ford''s Theatre National Historic Site', ST_GeomFromText('POINT(-77.02563 38.89667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Forillon National Park', ST_GeomFromText('POINT(-64.29027 48.82388)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Bowie National Historic Site', ST_GeomFromText('POINT(-109.43542 32.14611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Caroline National Memorial', ST_GeomFromText('POINT(-81.50042 30.38694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Davis National Historic Site', ST_GeomFromText('POINT(-103.92562 30.59583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Donelson National Battlefield', ST_GeomFromText('POINT(-87.85736 36.48438)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Donelson National Cemetery', ST_GeomFromText('POINT(-87.84766 36.48525)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Dupont Park', ST_GeomFromText('POINT(-76.94947 38.8766)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Foote Park', ST_GeomFromText('POINT(-77.02778 38.7667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Frederica National Monument', ST_GeomFromText('POINT(-81.39313 31.22389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Laramie National Historic Site', ST_GeomFromText('POINT(-104.53562 42.20917)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Larned National Historic Site', ST_GeomFromText('POINT(-99.2265 38.15667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Matanzas National Monument', ST_GeomFromText('POINT(-81.23898 29.71528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort McHenry National Monument and Historic Shrine', ST_GeomFromText('POINT(-76.57981 39.26306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Necessity National Battlefield', ST_GeomFromText('POINT(-79.59956 39.81667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Point National Historic Site', ST_GeomFromText('POINT(-122.47692 37.81056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Pulaski National Monument', ST_GeomFromText('POINT(-80.89008 32.02722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Raleigh National Historic Site', ST_GeomFromText('POINT(-75.70872 35.93833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Scott National Historic Site', ST_GeomFromText('POINT(-94.70455 37.84389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Smith National Historic Site', ST_GeomFromText('POINT(-94.42261 35.34333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Stanwix National Monument', ST_GeomFromText('POINT(-75.45506 43.21056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Sumter National Monument', ST_GeomFromText('POINT(-79.87453 32.75222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Union National Monument', ST_GeomFromText('POINT(-105.01802 35.90722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Union Trading Post National Historic Site', ST_GeomFromText('POINT(-104.04032 47.99944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Vancouver National Historic Site', ST_GeomFromText('POINT(-122.65792 45.6254)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fort Washington National Park', ST_GeomFromText('POINT(-77.03304 38.71083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fossil Butte National Monument', ST_GeomFromText('POINT(-110.76762 41.85875)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Franklin Delano Roosevelt Memorial', ST_GeomFromText('POINT(-77.0443 38.88389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Frederick Douglass National Historic Site', ST_GeomFromText('POINT(-76.98511 38.86333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Frederick Law Olmsted National Historic Site', ST_GeomFromText('POINT(-71.13205 42.325)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fredericksburg and Spotsylvania National Military Park', ST_GeomFromText('POINT(-77.46901 38.29305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fredericksburg National Cemetery', ST_GeomFromText('POINT(-77.46884 38.29307)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Friendship Hill National Historic Site', ST_GeomFromText('POINT(-79.92899 39.77778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Fundy National Park', ST_GeomFromText('POINT(-64.9536 45.59527)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gates of the Arctic National Park and Preserve', ST_GeomFromText('POINT(-153.29972 67.78333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Breezy Point', ST_GeomFromText('POINT(-73.92607 40.5565)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Floyd Bennett Field', ST_GeomFromText('POINT(-73.89082 40.591)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Fort Hancock', ST_GeomFromText('POINT(-74.00259 40.46389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Fort Tilden', ST_GeomFromText('POINT(-73.89093 40.56389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Fort Wadsworth', ST_GeomFromText('POINT(-74.06232 40.60833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Great Kills Park', ST_GeomFromText('POINT(-74.12715 40.55542)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Jacob Riis Park', ST_GeomFromText('POINT(-73.87395 40.56702)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Jamaica Bay', ST_GeomFromText('POINT(-73.84231 40.61778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Miller Field', ST_GeomFromText('POINT(-74.09538 40.56416)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gateway National Recreation Area - Sandy Hook', ST_GeomFromText('POINT(-73.99506 40.45288)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gauley River National Recreation Area', ST_GeomFromText('POINT(-80.88982 38.22)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('General Grant National Memorial', ST_GeomFromText('POINT(-73.96285 40.81333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('George Mason Memorial', ST_GeomFromText('POINT(-77.03903 38.87944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('George Rogers Clark National Historical Park', ST_GeomFromText('POINT(-87.5354 38.67919)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('George Washington Birthplace National Monument', ST_GeomFromText('POINT(-76.93036 38.18611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('George Washington Carver National Monument', ST_GeomFromText('POINT(-94.354 36.98636)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('George Washington Memorial Parkway', ST_GeomFromText('POINT(-77.10217 38.91111)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Georgian Bay Islands National Park', ST_GeomFromText('POINT(-79.87444 44.87777)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gettysburg National Cemetery', ST_GeomFromText('POINT(-77.23124 39.82027)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gettysburg National Military Park', ST_GeomFromText('POINT(-77.24615 39.81206)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Giant Sequoia National Monument', ST_GeomFromText('POINT(-118.50438 36.04)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gila Cliff Dwellings National Monument', ST_GeomFromText('POINT(-108.27192 33.22722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Glacier Bay National Park', ST_GeomFromText('POINT(-135.75552 58.41543)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Glacier Bay National Park and Preserve', ST_GeomFromText('POINT(-136.99996 58.5)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Glacier National Park', ST_GeomFromText('POINT(-113.77572 48.692)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Glen Canyon National Recreation Area', ST_GeomFromText('POINT(-111.48672 36.9936)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gloria Dei (Old Swedes'') Church', ST_GeomFromText('POINT(-75.14342 39.93444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Golden Gate National Recreation Area', ST_GeomFromText('POINT(-122.46652 37.78333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Golden Gate National Recreation Area-Alcatraz Island', ST_GeomFromText('POINT(-122.42322 37.82667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Golden Gate National Recreation Area-Presidio', ST_GeomFromText('POINT(-122.46572 37.79806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Golden Spike National Historic Site', ST_GeomFromText('POINT(-112.54722 41.62048)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Governors Island National Monument', ST_GeomFromText('POINT(-74.01589 40.69139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon', ST_GeomFromText('POINT(-112.13722 36.05749)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon - North Rim', ST_GeomFromText('POINT(-113.19712 36)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon - South Rim National Park', ST_GeomFromText('POINT(-112.11732 36.06501)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon National Park', ST_GeomFromText('POINT(-112.13745 36.0575)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon West Airport', ST_GeomFromText('POINT(-113.81612 35.99038)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Canyon-Parashant National Monument', ST_GeomFromText('POINT(-113.69972 36.4)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Portage National Monument', ST_GeomFromText('POINT(-89.74898 47.98528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Staircase-Escalante National Monument', ST_GeomFromText('POINT(-111.68327 37.4)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grand Teton National Park', ST_GeomFromText('POINT(-110.78822 43.7403)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grant-Kohrs Ranch National Historic Site', ST_GeomFromText('POINT(-112.73922 46.40833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Grasslands National Park', ST_GeomFromText('POINT(-107.42542 49.17694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Great Basin National Park', ST_GeomFromText('POINT(-114.26082 38.93873)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Great Egg Harbor Scenic and Recreational River', ST_GeomFromText('POINT(-74.64957 39.30417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Great Sand Dunes National Park', ST_GeomFromText('POINT(-105.54172 37.7539)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Great Sand Dunes National Park and Preserve', ST_GeomFromText('POINT(-105.51182 37.73287)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Great Smoky Mountains National Park', ST_GeomFromText('POINT(-83.16773 35.72715)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Greenbelt Park', ST_GeomFromText('POINT(-76.89831 38.98917)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gros Morne National Park', ST_GeomFromText('POINT(-57.78305 49.5)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Guadalupe Mountains National Park', ST_GeomFromText('POINT(-104.85962 31.916)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Guilford Courthouse National Military Park', ST_GeomFromText('POINT(-79.84623 36.13139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gulf Islands National Park Reserve', ST_GeomFromText('POINT(-123.44732 48.85055)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gulf Islands National Seashore', ST_GeomFromText('POINT(-86.96735 30.36444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Gwaii Haanas Park Reserve and Haida Heritage Site', ST_GeomFromText('POINT(-131.47072 52.38916)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hagerman Fossil Beds National Monument', ST_GeomFromText('POINT(-114.94502 42.79028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Haleakala National Park', ST_GeomFromText('POINT(-156.21002 20.71062)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hamilton Grange National Memorial', ST_GeomFromText('POINT(-73.94815 40.82238)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hampton National Historic Site', ST_GeomFromText('POINT(-76.58734 39.41611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hanford Reach National Monument', ST_GeomFromText('POINT(-119.51661 46.58333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Harmony Hall Fort Washington Maryland', ST_GeomFromText('POINT(-77.00304 38.74583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Harpers Ferry National Historical Park', ST_GeomFromText('POINT(-77.72952 39.32278)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Harry S. Truman National Historic Site', ST_GeomFromText('POINT(-94.53209 38.90211)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hawaii Volcanoes National Park', ST_GeomFromText('POINT(-155.29962 19.39999)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Herbert Hoover National Historic Site', ST_GeomFromText('POINT(-91.3479 41.66861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Historic Camden Revolutionary War Site', ST_GeomFromText('POINT(-80.60317 34.23389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Historic Jamestowne', ST_GeomFromText('POINT(-76.77873 37.20971)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hohokam Pima National Monument', ST_GeomFromText('POINT(-111.92642 33.15444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Home of Franklin D. Roosevelt National Historic Site', ST_GeomFromText('POINT(-73.93539 41.76721)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Homestead National Monument of America', ST_GeomFromText('POINT(-96.82172 40.28525)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Honokohau National Historical Park', ST_GeomFromText('POINT(-156.02172 19.6787)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hopewell Culture National Historical Park', ST_GeomFromText('POINT(-83.0062 39.37583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hopewell Furnace National Historic Site', ST_GeomFromText('POINT(-75.7754 40.19861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Horseshoe Bend National Military Park', ST_GeomFromText('POINT(-85.73817 32.97083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hot Springs National Park', ST_GeomFromText('POINT(-92.95843 34.52684)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hovenweep National Monument', ST_GeomFromText('POINT(-109.07702 37.38388)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Hubbell Trading Post National Historic Site', ST_GeomFromText('POINT(-109.59312 35.72556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Independence Hall', ST_GeomFromText('POINT(-75.1498 39.94889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Independence National Historical Park', ST_GeomFromText('POINT(-75.14787 39.94778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Indiana Dunes National Lakeshore', ST_GeomFromText('POINT(-87.10791 41.64806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('International Peace Garden', ST_GeomFromText('POINT(-100.06432 48.99098)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Inupiat Heritage Center', ST_GeomFromText('POINT(-156.75331 71.29861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ironwood Forest National Monument', ST_GeomFromText('POINT(-111.56673 32.45896)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Isle Royale National Park', ST_GeomFromText('POINT(-88.89144 47.9624)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ivvavik National Park', ST_GeomFromText('POINT(-139.52462 69.51972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('James A. Garfield National Historic Site', ST_GeomFromText('POINT(-81.34706 41.66222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Jasper National Park', ST_GeomFromText('POINT(-118.08182 52.87305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Jean Lafitte National Historical Park and Preserve', ST_GeomFromText('POINT(-89.99398 29.9425)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Jefferson National Expansion Memorial', ST_GeomFromText('POINT(-90.18483 38.6246)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Jewel Cave National Monument', ST_GeomFromText('POINT(-103.82912 43.72944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Jimmy Carter National Historic Site', ST_GeomFromText('POINT(-84.39984 32.03389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('John D. Rockefeller Jr. Memorial Parkway', ST_GeomFromText('POINT(-110.69273 44.10472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('John Day Fossil Beds National Monument', ST_GeomFromText('POINT(-119.63412 44.54987)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('John Ericsson National Memorial', ST_GeomFromText('POINT(-77.05014 38.88667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('John Fitzgerald Kennedy National Historic Site', ST_GeomFromText('POINT(-71.12428 42.34583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('John Muir National Historic Site', ST_GeomFromText('POINT(-122.13302 37.99131)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Johnstown Flood National Memorial', ST_GeomFromText('POINT(-78.77847 40.34556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Joshua Tree National Park', ST_GeomFromText('POINT(-115.82762 33.843)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kalaupapa Leprosy Settlement and National Historical Park', ST_GeomFromText('POINT(-156.95972 21.17778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kasha-Katuwe Tent Rocks National Monument', ST_GeomFromText('POINT(-106.41912 35.6736)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kate Mullany National Historic Site', ST_GeomFromText('POINT(-73.68163 42.7399)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Katmai National Park', ST_GeomFromText('POINT(-154.88652 58.58305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Katmai National Park and Preserve', ST_GeomFromText('POINT(-154.99972 58.5)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kejimkujik National Park', ST_GeomFromText('POINT(-65.21805 44.39916)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kenai Fjords National Park', ST_GeomFromText('POINT(-149.64982 59.91666)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kenilworth Park and Aquatic Gardens', ST_GeomFromText('POINT(-76.94771 38.90833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kennesaw Mountain National Battlefield Park', ST_GeomFromText('POINT(-84.5779 33.98306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Keweenaw National Historical Park', ST_GeomFromText('POINT(-88.4537 47.24667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kings Canyon National Park', ST_GeomFromText('POINT(-118.64062 36.81199)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kings Mountain National Military Park', ST_GeomFromText('POINT(-81.38928 35.13778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Klondike Gold Rush National Historical Park', ST_GeomFromText('POINT(-135.31162 59.45639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kluane National Park and Reserve', ST_GeomFromText('POINT(-137.50982 60.75305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Knife River Indian Villages National Historic Site', ST_GeomFromText('POINT(-101.38562 47.35417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kobuk Valley National Park', ST_GeomFromText('POINT(-159.13662 67.34408)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kootenay National Park', ST_GeomFromText('POINT(-116.04872 50.88305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Korean War Veterans Memorial', ST_GeomFromText('POINT(-77.047 38.88778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Kouchibouguac National Park', ST_GeomFromText('POINT(-64.96666 46.84972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('La Mauricie National Park', ST_GeomFromText('POINT(-72.85583 46.80805)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Chelan National Recreation Area', ST_GeomFromText('POINT(-120.67802 48.32194)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Clark National Park', ST_GeomFromText('POINT(-154.32362 60.19943)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Clark National Park and Preserve', ST_GeomFromText('POINT(-153.41642 60.96667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Mead National Recreation Area', ST_GeomFromText('POINT(-113.69972 36.4)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Mead National Recreation Area', ST_GeomFromText('POINT(-114.79642 36.00972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Meredith National Recreation Area', ST_GeomFromText('POINT(-101.55252 35.71472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lake Roosevelt National Recreation Area', ST_GeomFromText('POINT(-118.98032 47.95611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lassen Volcanic National Park', ST_GeomFromText('POINT(-121.41452 40.48297)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lava Beds National Monument', ST_GeomFromText('POINT(-121.50802 41.71389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lewis and Clark National and State Historical Parks', ST_GeomFromText('POINT(-123.87722 46.13361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lewis and Clark National Historic Trail', ST_GeomFromText('POINT(-108.00939 46.00361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Liberty Memorial', ST_GeomFromText('POINT(-94.58606 39.08044)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lincoln Boyhood National Memorial', ST_GeomFromText('POINT(-86.9968 38.11833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lincoln Home National Historic Site', ST_GeomFromText('POINT(-89.64484 39.79722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lincoln Memorial', ST_GeomFromText('POINT(-77.04992 38.8893)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Little Bighorn Battlefield National Monument', ST_GeomFromText('POINT(-107.42722 45.57028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Little River Canyon National Preserve', ST_GeomFromText('POINT(-85.59536 34.44056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Little Rock Central High School National Historic Site', ST_GeomFromText('POINT(-92.29845 34.73666)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Longfellow National Historic Site', ST_GeomFromText('POINT(-71.12623 42.37667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lowell National Historical Park', ST_GeomFromText('POINT(-71.31008 42.64667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lower East Side Tenement National Historic Site', ST_GeomFromText('POINT(-73.98997 40.7185)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lyndon B. Johnson National Historical Park', ST_GeomFromText('POINT(-98.62398 30.24083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Lyndon Baines Johnson Memorial Grove on the Potomac', ST_GeomFromText('POINT(-77.05125 38.87861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Maggie L. Walker National Historic Site', ST_GeomFromText('POINT(-77.4379 37.54778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mammoth Cave National Park', ST_GeomFromText('POINT(-86.11403 37.1841)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Manassas National Battlefield Park', ST_GeomFromText('POINT(-77.52151 38.81277)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Manzanar National Historic Site', ST_GeomFromText('POINT(-118.15422 36.72833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Marianas Trench Marine National Monument', ST_GeomFromText('POINT(145 20)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Marsh-Billings-Rockefeller National Historical Park', ST_GeomFromText('POINT(-72.52917 43.63125)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Martin Luther King Jr National Memorial', ST_GeomFromText('POINT(-77.045124 38.885926)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Martin Luther King Jr. National Historic Site', ST_GeomFromText('POINT(-84.37211 33.755)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Martin Van Buren National Historic Site', ST_GeomFromText('POINT(-73.70405 42.36971)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mary McLeod Bethune Council House National Historic Site', ST_GeomFromText('POINT(-77.03012 38.90778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Meridian Hill Park', ST_GeomFromText('POINT(-77.03559 38.92124)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mesa Verde National Park', ST_GeomFromText('POINT(-108.50862 37.3192)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Middle Delaware National Scenic River', ST_GeomFromText('POINT(-74.89984 41.15)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mingan Archipelago National Park Reserve', ST_GeomFromText('POINT(-63.57638 50.25472)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Minidoka National Historic Site', ST_GeomFromText('POINT(-114.23202 42.63694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Minute Man National Historical Park', ST_GeomFromText('POINT(-71.29842 42.45306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Minuteman Missile National Historic Site', ST_GeomFromText('POINT(-102.16032 43.93111)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Missouri National Recreational River', ST_GeomFromText('POINT(-97.39263 42.8625)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Misty Fiords National Monument', ST_GeomFromText('POINT(-130.60716 55.62167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mojave National Preserve', ST_GeomFromText('POINT(-115.71642 34.88333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Monocacy National Battlefield', ST_GeomFromText('POINT(-77.39192 39.37115)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Montezuma Castle National Monument', ST_GeomFromText('POINT(-111.83972 34.61305)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Moores Creek National Battlefield', ST_GeomFromText('POINT(-78.10928 34.45806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Morristown National Historical Park', ST_GeomFromText('POINT(-74.52842 40.76694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mount Rainier National Park', ST_GeomFromText('POINT(-121.74982 46.85)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mount Revelstoke National Park', ST_GeomFromText('POINT(-118.06512 51.08583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mount Rushmore National Memorial', ST_GeomFromText('POINT(-103.45952 43.87895)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Mount St. Helens National Volcanic Monument', ST_GeomFromText('POINT(-122.18422 46.23317)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Muir Woods National Monument', ST_GeomFromText('POINT(-122.58362 37.89889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Nahanni National Park Reserve', ST_GeomFromText('POINT(-123.59962 61.08333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Natchez National Historical Park', ST_GeomFromText('POINT(-91.38287 31.54333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Natchez Trace Trail', ST_GeomFromText('POINT(-88.08826 34.66772)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('National Constitution Center', ST_GeomFromText('POINT(-75.14876 39.95341)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('National Japanese Am. Memorial To Patriotism During WW II', ST_GeomFromText('POINT(-77.01034 38.89452)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('National Mall', ST_GeomFromText('POINT(-77.02339 38.89)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('National Park of American Samoa', ST_GeomFromText('POINT(-170.68512 -14.25708)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('National World War II Memorial', ST_GeomFromText('POINT(-77.04029 38.8894)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Natural Bridges National Monument', ST_GeomFromText('POINT(-110.01342 37.60138)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Navajo National Monument', ST_GeomFromText('POINT(-110.53442 36.68417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('New Bedford Whaling National Historical Park', ST_GeomFromText('POINT(-70.92314 41.63556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('New Jersey Pinelands National Reserve', ST_GeomFromText('POINT(-74.74985 39.75)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('New Orleans Jazz National Historical Park', ST_GeomFromText('POINT(-90.06784 29.96306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('New River Gorge National River', ST_GeomFromText('POINT(-81.08152 37.96083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Newberry National Volcanic Monument', ST_GeomFromText('POINT(-121.25188 43.69417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Nez Perce National Historical Park', ST_GeomFromText('POINT(-116.35912 46.14194)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Nicodemus National Historic Site', ST_GeomFromText('POINT(-99.61734 39.39083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ninety Six National Historic Site', ST_GeomFromText('POINT(-82.02428 34.14694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Niobrara National Scenic River', ST_GeomFromText('POINT(-100.31642 42.88333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Noatak National Preserve', ST_GeomFromText('POINT(-161.19972 68)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('North Cascades National Park', ST_GeomFromText('POINT(-121.18952 48.70643)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ocmulgee National Monument', ST_GeomFromText('POINT(-83.60814 32.83667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Oklahoma City National Memorial', ST_GeomFromText('POINT(-97.51708 35.47278)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Old Post Office Pavilion', ST_GeomFromText('POINT(-77.02788 38.89398)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Old Stone House', ST_GeomFromText('POINT(-77.06054 38.90556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Olympic National Park', ST_GeomFromText('POINT(-123.52162 47.799)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Oregon Caves National Monument', ST_GeomFromText('POINT(-123.40692 42.09806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Organ Pipe Cactus National Park', ST_GeomFromText('POINT(-112.85752 32.04444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Oxon Cove Park and Oxon Hill Farm', ST_GeomFromText('POINT(-78.31665 37.08806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ozark National Scenic Riverways', ST_GeomFromText('POINT(-91.27615 37.1907)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pacific Rim National Park Reserve', ST_GeomFromText('POINT(-124.76872 48.63611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Padre Island National Seashore', ST_GeomFromText('POINT(-97.36846 26.98444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Palo Alto Battlefield National Historical Park', ST_GeomFromText('POINT(-97.48037 26.02139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Papah?naumoku?kea Marine National Monument', ST_GeomFromText('POINT(-171.73327 25.7)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pea Ridge National Military Park', ST_GeomFromText('POINT(-94.03401 36.45444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pecos National Historical Park', ST_GeomFromText('POINT(-105.68912 35.54999)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Peirce Mill', ST_GeomFromText('POINT(-77.05192 38.94028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pennsylvania Avenue National Historic Site', ST_GeomFromText('POINT(-77.02373 38.89361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Perry''s Victory and International Peace Memorial', ST_GeomFromText('POINT(-82.81124 41.65417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Petersburg National Battlefield', ST_GeomFromText('POINT(-77.36123 37.21944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Petrified Forest National Park', ST_GeomFromText('POINT(-109.78332 35.06274)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Petroglyph National Monument', ST_GeomFromText('POINT(-106.76162 35.13583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pictured Rocks National Lakeshore', ST_GeomFromText('POINT(-86.31235 46.56222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pinnacles National Monument', ST_GeomFromText('POINT(-121.16662 36.48693)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pipe Spring National Monument', ST_GeomFromText('POINT(-112.73692 36.86193)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pipestone National Monument', ST_GeomFromText('POINT(-96.32481 44.01333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Piscataway Park', ST_GeomFromText('POINT(-77.09276 38.67861)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Point Pelee National Park', ST_GeomFromText('POINT(-82.51749 41.96416)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Point Reyes National Seashore', ST_GeomFromText('POINT(-122.88502 38.06)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pompeys Pillar National Monument', ST_GeomFromText('POINT(-108.00577 45.99528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Poplar Grove National Cemetery', ST_GeomFromText('POINT(-77.42845 37.16028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Port Chicago Naval Magazine National Memorial', ST_GeomFromText('POINT(-122.02952 38.05749)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Poverty Point National Monument', ST_GeomFromText('POINT(-91.40763 32.63904)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Prehistoric Trackways National Monument', ST_GeomFromText('POINT(-106.89972 32.35)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('President Lincoln''s Cottage at the Soldiers'' Home', ST_GeomFromText('POINT(-77.01161 38.94167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('President''s Park (White House)', ST_GeomFromText('POINT(-77.03674 38.89417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Prince Albert National Park', ST_GeomFromText('POINT(-106.23322 53.99583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Prince Edward Island National Park', ST_GeomFromText('POINT(-63.07472 46.41666)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Prince William Forest Park', ST_GeomFromText('POINT(-77.3797 38.58528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pu''uhonua o Honaunau National Historical Park', ST_GeomFromText('POINT(-155.91002 19.42194)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pu''ukohola Heiau National Historic Site', ST_GeomFromText('POINT(-155.81972 20.02667)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Pukaskwa National Park', ST_GeomFromText('POINT(-85.9161 48.03361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Quttinirpaaq National Park', ST_GeomFromText('POINT(-68.4211 81.56388)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Rainbow Bridge National Monument', ST_GeomFromText('POINT(-110.96382 37.07721)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Red Hill Patrick Henry National Memorial', ST_GeomFromText('POINT(-78.89792 37.03222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Redwood National Park', ST_GeomFromText('POINT(-123.94482 41.4771)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Richmond National Battlefield Park', ST_GeomFromText('POINT(-77.37345 37.42917)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Riding Mountain National Park', ST_GeomFromText('POINT(-100.03572 50.86388)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('River Raisin National Battlefield Park', ST_GeomFromText('POINT(-83.37817 41.91361)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Rock Creek and Potomac Parkway', ST_GeomFromText('POINT(-77.05439 38.91306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Rock Creek Park', ST_GeomFromText('POINT(-77.04498 38.9575)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Rocky Mountain National Park', ST_GeomFromText('POINT(-105.68962 40.414)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Roger Williams National Memorial', ST_GeomFromText('POINT(-71.41075 41.83038)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Roosevelt Campobello International Park', ST_GeomFromText('POINT(-66.95915 44.87583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Rose Atoll Marine National Monument', ST_GeomFromText('POINT(-168.14994 -14.50994)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ross Lake National Recreation Area', ST_GeomFromText('POINT(-121.24502 48.67306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Russell Cave National Monument', ST_GeomFromText('POINT(-85.80314 34.97417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sagamore Hill National Historic Site', ST_GeomFromText('POINT(-73.49734 40.88556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saguaro National Park', ST_GeomFromText('POINT(-111.13052 32.2432)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saint Croix Island International Historic Site', ST_GeomFromText('POINT(-67.13317 45.12833)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saint Croix National Scenic Riverway', ST_GeomFromText('POINT(-92.65735 45.38917)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saint Paul''s Church National Historic Site', ST_GeomFromText('POINT(-73.82566 40.89278)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saint-Gaudens National Historic Site', ST_GeomFromText('POINT(-72.36848 43.4959)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Salem Maritime National Historic Site', ST_GeomFromText('POINT(-70.88706 42.52056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Salinas Pueblo Missions National Monument', ST_GeomFromText('POINT(-106.09002 34.25972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Salt River Bay National Historical Park', ST_GeomFromText('POINT(-64.7587 17.77889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('San Antonio Missions National Historical Park', ST_GeomFromText('POINT(-98.48008 29.36167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('San Francisco Maritime National Historical Park', ST_GeomFromText('POINT(-122.42332 37.80639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('San Juan Island National Historical Park', ST_GeomFromText('POINT(-122.98532 48.45583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('San Juan National Historic Site', ST_GeomFromText('POINT(-66.11012 18.4675)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sand Creek Massacre National Historic Site', ST_GeomFromText('POINT(-102.52832 38.54083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Santa Monica Mountains National Recreation Area', ST_GeomFromText('POINT(-118.60222 34.10389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Santa Rosa and San Jacinto Mountains National Monument', ST_GeomFromText('POINT(-116.7055 33.80083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saratoga National Historical Park', ST_GeomFromText('POINT(-73.63728 42.99889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Saugus Iron Works National Historic Site', ST_GeomFromText('POINT(-71.00873 42.46778)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Scotts Bluff National Monument', ST_GeomFromText('POINT(-103.70052 41.83556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sequoia National Park', ST_GeomFromText('POINT(-118.72242 36.36444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sewall-Belmont House National Historic Site', ST_GeomFromText('POINT(-77.00344 38.89194)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Shenandoah National Park', ST_GeomFromText('POINT(-78.30072 38.72)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Shiloh National Cemetery', ST_GeomFromText('POINT(-88.32007 35.15041)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Shiloh National Military Park', ST_GeomFromText('POINT(-88.32981 35.15188)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sirmilik National Park', ST_GeomFromText('POINT(-78.43416 72.34054)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sitka National Historical Park', ST_GeomFromText('POINT(-135.31362 57.04694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sleeping Bear Dunes National Lakeshore', ST_GeomFromText('POINT(-86.02013 44.91306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sonoran Desert National Monument', ST_GeomFromText('POINT(-112.45494 33.00167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Springfield Armory National Historic Site', ST_GeomFromText('POINT(-72.58151 42.10806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('St. Lawrence Islands National Park', ST_GeomFromText('POINT(-75.87276 44.41444)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Star-Spangled Banner National Historic Trail', ST_GeomFromText('POINT(-76.57995 39.26306)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Statue Of Liberty National Monument', ST_GeomFromText('POINT(-74.04477 40.68968)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Steamtown National Historic Site', ST_GeomFromText('POINT(-75.67116 41.40733)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Stones River National Battlefield', ST_GeomFromText('POINT(-86.43639 35.87629)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Stones River National Cemetery', ST_GeomFromText('POINT(-86.436 35.87639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Suitland Parkway', ST_GeomFromText('POINT(-76.96801 38.84694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Sunset Crater Volcano National Monument', ST_GeomFromText('POINT(-111.50042 35.36558)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tallgrass Prairie National Preserve', ST_GeomFromText('POINT(-96.55869 38.43278)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Terra Nova National Park', ST_GeomFromText('POINT(-53.99583 48.51194)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Thaddeus Kosciuszko National Memorial', ST_GeomFromText('POINT(-75.14732 39.94333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Theodore Roosevelt Birthplace National Historic Site', ST_GeomFromText('POINT(-73.98956 40.73889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Theodore Roosevelt Inaugural National Historic Site', ST_GeomFromText('POINT(-78.87226 42.90148)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Theodore Roosevelt Island', ST_GeomFromText('POINT(-77.06402 38.89721)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Theodore Roosevelt National Park', ST_GeomFromText('POINT(-103.24872 47.3352)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Thomas Cole National Historic Site', ST_GeomFromText('POINT(-73.86178 42.22583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Thomas Edison National Historical Park', ST_GeomFromText('POINT(-74.23759 40.78694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Thomas Jefferson Memorial', ST_GeomFromText('POINT(-77.03647 38.88139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Thomas Stone National Historic Site', ST_GeomFromText('POINT(-77.03595 38.53139)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Timpanogos Cave National Monument', ST_GeomFromText('POINT(-111.70912 40.44056)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tomb of the Unknowns', ST_GeomFromText('POINT(-77.07206 38.87638)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tonto National Monument', ST_GeomFromText('POINT(-111.09412 33.65694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Torngat Mountains National Park Reserve', ST_GeomFromText('POINT(-63.10027 58.67222)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Touro Synagogue National Historic Site', ST_GeomFromText('POINT(-71.31178 41.48944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tuktut Nogait National Park', ST_GeomFromText('POINT(-123.01622 69.28333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tumac-cori National Historical Park', ST_GeomFromText('POINT(-111.05052 31.5675)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tupelo National Battlefield', ST_GeomFromText('POINT(-88.73706 34.25528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tuskegee Airmen National Historic Site', ST_GeomFromText('POINT(-85.67984 32.45722)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tuskegee Institute National Historic Site', ST_GeomFromText('POINT(-85.70762 32.43028)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Tuzigoot National Monument', ST_GeomFromText('POINT(-112.02572 34.77085)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('U.S. Air Force Memorial', ST_GeomFromText('POINT(-77.06606 38.86865)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ukkusiksalik National Park', ST_GeomFromText('POINT(-87.30527 65.34166)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Ulysses S. Grant National Historic Site', ST_GeomFromText('POINT(-90.35178 38.55111)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('United States Marine Corps War Memorial', ST_GeomFromText('POINT(-77.06946 38.89047)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('United States Navy Memorial', ST_GeomFromText('POINT(-77.02286 38.89417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Upper Missouri River Breaks National Monument', ST_GeomFromText('POINT(-109.02133 47.78333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('USS Arizona Memorial', ST_GeomFromText('POINT(-157.94972 21.365)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('USS Utah Memorial', ST_GeomFromText('POINT(-157.96244 21.36889)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Valley Forge National Historical Park', ST_GeomFromText('POINT(-75.43869 40.09693)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vanderbilt Mansion National Historic Site', ST_GeomFromText('POINT(-73.94174 41.79611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vermilion Cliffs National Monument', ST_GeomFromText('POINT(-111.74105 36.80639)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vicksburg National Cemetery', ST_GeomFromText('POINT(-90.84959 32.34886)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vicksburg National Military Park', ST_GeomFromText('POINT(-90.84963 32.34879)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vietnam Veterans Memorial', ST_GeomFromText('POINT(-77.04756 38.8911)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vietnam Women''s Memorial', ST_GeomFromText('POINT(-77.04679 38.8904)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Virgin Islands Coral Reef National Monument', ST_GeomFromText('POINT(-64.72675 18.30611)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Virgin Islands National Park', ST_GeomFromText('POINT(-64.73323 18.33333)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Voyageurs National Park', ST_GeomFromText('POINT(-93.01663 48.0996)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Vuntut National Park', ST_GeomFromText('POINT(-140.04712 68.30694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Walnut Canyon National Monument', ST_GeomFromText('POINT(-111.50942 35.17167)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wapusk National Park', ST_GeomFromText('POINT(-92.66999 57.24638)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('War in the Pacific National Historical Park', ST_GeomFromText('POINT(144.66694 13.3)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Washington Monument', ST_GeomFromText('POINT(-77.03504 38.88947)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Washita Battlefield National Historic Site', ST_GeomFromText('POINT(-99.70012 36.6175)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Waterton Lakes National Park', ST_GeomFromText('POINT(-113.91482 49.04583)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Weir Farm National Historic Site', ST_GeomFromText('POINT(-73.45455 41.25806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('West Potomac Park', ST_GeomFromText('POINT(-77.0469 38.886)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Whiskeytown-Shasta-Trinity National Recreation Area', ST_GeomFromText('POINT(-122.94172 40.73528)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('White House', ST_GeomFromText('POINT(-77.03634 38.89767)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('White Sands National Monument', ST_GeomFromText('POINT(-106.17142 32.77971)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Whitman Mission National Historic Site', ST_GeomFromText('POINT(-118.46112 46.04)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('William Howard Taft National Historic Site', ST_GeomFromText('POINT(-84.50845 39.11972)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('William J Clinton Birthplace Home National Historic Site', ST_GeomFromText('POINT(-93.5964 33.66717)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wilson''s Creek National Battlefield', ST_GeomFromText('POINT(-93.41984 37.11556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wind Cave National Park', ST_GeomFromText('POINT(-103.43302 43.5909)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wolf Trap National Park for the Performing Arts', ST_GeomFromText('POINT(-77.26184 38.93694)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Women''s Rights National Historical Park', ST_GeomFromText('POINT(-76.8012 42.91083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wood Buffalo National Park', ST_GeomFromText('POINT(-112.98592 59.39083)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('World War II Home Front National Historical Park', ST_GeomFromText('POINT(-122.36442 37.90619)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wrangell-St. Elias National Park', ST_GeomFromText('POINT(-143.21622 61.24284)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wrangell-St. Elias National Park and Preserve', ST_GeomFromText('POINT(-141.99972 61)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wright Brothers National Memorial', ST_GeomFromText('POINT(-75.66792 36.01417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Wupatki National Monument', ST_GeomFromText('POINT(-111.38662 35.56556)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('WW II Valor in the Pacific National Monument Atka Island', ST_GeomFromText('POINT(-174.44522 52.13806)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('WW II Valor in the Pacific National Monument Attu Island', ST_GeomFromText('POINT(172.90944 52.9025)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('WW II Valor in the Pacific National Monument Ford Island', ST_GeomFromText('POINT(-157.96022 21.36389)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('WW II Valor in the Pacific National Monument Kiska', ST_GeomFromText('POINT(177.46 51.96417)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('WW II Valor in the Pacific Tule Lake Relocation Center', ST_GeomFromText('POINT(-121.37466 41.88944)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yellowstone National Park', ST_GeomFromText('POINT(-110.61342 44.79573)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yoho National Park', ST_GeomFromText('POINT(-116.48622 51.39527)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yorktown National Cemetery', ST_GeomFromText('POINT(-76.50624 37.22493)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yosemite National Park', ST_GeomFromText('POINT(-119.69432 37.6379)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yucca House National Monument', ST_GeomFromText('POINT(-108.68612 37.25027)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Yukon-Charley Rivers National Preserve', ST_GeomFromText('POINT(-142.79972 65)', 4326));" + 
        "Insert into "+table_name+" (name, the_geom) VALUES ('Zion National Park', ST_GeomFromText('POINT(-112.68142 37.22299)', 4326));"; 
 
        pg.query(new_map_points, function(err, result) {
          if(err) {
            return console.error('error loading map data', err);
          }
          console.dir(result);
        });
      });
    });
  });
});
