function _bottom_case_walls_extrude_20_6_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400385],[89.63,-33.9900385]]).appendPoint([89.6299748,-33.0400133]).appendArc([90.1299748,-32.54],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.13,-32.54]).appendArc([108.63,-32.04],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.63,-30.788]).appendArc([109.13,-30.288],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([129.032,-30.288]).appendArc([129.532,-30.788],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([129.532,-32.04]).appendArc([130.032,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.13,-32.54]).appendArc([146.63,-32.04],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-30.788]).appendArc([147.13,-30.288],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-30.288]).appendArc([167.532,-30.788],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-32.04]).appendArc([168.032,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-32.54]).appendArc([186.532,-33.04],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-34.538]).appendArc([187.032,-35.038],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-35.038]).appendArc([205.5315782,-35.537778],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-36.4873561]).appendPoint([205.5321344,-36.790222]).appendArc([206.0321344,-37.29],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([232.463,-37.29]).appendArc([232.963,-37.79],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([232.963,-107.1895263]).appendPoint([232.4537368,-108.071596]).appendPoint([232.452747,-108.0733104]).appendPoint([232.4517525,-108.0750221]).appendPoint([216.059025,-136.2898589]).appendArc([215.3766965,-136.4716902],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([182.5129368,-117.4977896]).appendArc([182.4614301,-117.4718901],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.8768463,-110.7310878]).appendArc([166.678353,-110.69],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1320252,-110.69]).appendArc([89.6320252,-110.1900133],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400385]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.832,-109.2400066],[90.83,-33.9900066]]).appendPoint([90.8299934,-33.74]).appendPoint([109.33,-33.74]).appendArc([109.83,-33.24],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([109.83,-31.488]).appendPoint([128.332,-31.488]).appendPoint([128.332,-33.24]).appendArc([128.832,-33.74],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.33,-33.74]).appendArc([147.83,-33.24],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.83,-31.488]).appendPoint([166.332,-31.488]).appendPoint([166.332,-33.24]).appendArc([166.832,-33.74],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.332,-33.74]).appendPoint([185.332,-35.738]).appendArc([185.832,-36.238],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.331889,-36.238]).appendPoint([204.332,-36.487889]).appendPoint([204.3326671,-37.990222]).appendArc([204.8326671,-38.49],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([231.763,-38.49]).appendPoint([231.763,-106.8679873]).appendPoint([231.4145064,-107.471596]).appendPoint([215.3721318,-135.0834141]).appendPoint([215.1562158,-134.958755]).appendPoint([183.0529234,-116.4239105]).appendArc([183.0014167,-116.398011],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.1252444,-109.5310878]).appendArc([166.926751,-109.49],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.8320066,-109.49]).appendPoint([90.832,-109.2400066]).close().innerToCAG()
).extrude({ offset: [0, 0, 20.6] });
}


function _mcu_wall_cutout_extrude_7_5_outline_fn(){
    return new CSG.Path2D([[210.89,-65.375],[223.89,-65.375]]).appendPoint([223.89,-25.375]).appendPoint([210.89,-25.375]).appendPoint([210.89,-65.375]).close().innerToCAG()
.extrude({ offset: [0, 0, 7.5] });
}


function _power_reset_cutout_extrude_3_outline_fn(){
    return new CSG.Path2D([[220.925,-87.3],[239.075,-87.3]]).appendPoint([239.075,-69.15]).appendPoint([220.925,-69.15]).appendPoint([220.925,-87.3]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _bottom_case_outer_outline_extrude_3_outline_fn(){
    return new CSG.Path2D([[89.632,-109.2400385],[89.63,-33.9900385]]).appendPoint([89.6299748,-33.0400133]).appendArc([90.1299748,-32.54],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([108.13,-32.54]).appendArc([108.63,-32.04],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.63,-30.788]).appendArc([109.13,-30.288],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([129.032,-30.288]).appendArc([129.532,-30.788],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([129.532,-32.04]).appendArc([130.032,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.13,-32.54]).appendArc([146.63,-32.04],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-30.788]).appendArc([147.13,-30.288],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-30.288]).appendArc([167.532,-30.788],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-32.04]).appendArc([168.032,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-32.54]).appendArc([186.532,-33.04],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-34.538]).appendArc([187.032,-35.038],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-35.038]).appendArc([205.5315782,-35.537778],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-36.4873561]).appendPoint([205.5321344,-36.790222]).appendArc([206.0321344,-37.29],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([232.463,-37.29]).appendArc([232.963,-37.79],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([232.963,-107.1895263]).appendPoint([232.4537368,-108.071596]).appendPoint([232.452747,-108.0733104]).appendPoint([232.4517525,-108.0750221]).appendPoint([216.059025,-136.2898589]).appendArc([215.3766965,-136.4716902],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([182.5129368,-117.4977896]).appendArc([182.4614301,-117.4718901],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.8768463,-110.7310878]).appendArc([166.678353,-110.69],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1320252,-110.69]).appendArc([89.6320252,-110.1900133],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-109.2400385]).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _screws_extrude_3_outline_fn(){
    return CAG.circle({"center":[201.3272413,-121.7172413],"radius":1.1})
.union(
    CAG.circle({"center":[210.8272413,-105.2627587],"radius":1.1})
).union(
    CAG.circle({"center":[166.468,-89.261],"radius":1.1})
).union(
    CAG.circle({"center":[147.5,-69.125],"radius":1.1})
).union(
    CAG.circle({"center":[185.468,-53.736],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-88.125],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-50.125],"radius":1.1})
).extrude({ offset: [0, 0, 3] });
}


function _screw_heads_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[201.3272413,-121.7172413],"radius":2.05})
.union(
    CAG.circle({"center":[210.8272413,-105.2627587],"radius":2.05})
).union(
    CAG.circle({"center":[166.468,-89.261],"radius":2.05})
).union(
    CAG.circle({"center":[147.5,-69.125],"radius":2.05})
).union(
    CAG.circle({"center":[185.468,-53.736],"radius":2.05})
).union(
    CAG.circle({"center":[109.5,-88.125],"radius":2.05})
).union(
    CAG.circle({"center":[109.5,-50.125],"radius":2.05})
).extrude({ offset: [0, 0, 1.5] });
}




                function eggada50_bottom_tray_case_fn() {
                    

                // creating part 0 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_0 = _bottom_case_walls_extrude_20_6_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_0_bounds = eggada50_bottom_tray__part_0.getBounds();
                let eggada50_bottom_tray__part_0_x = eggada50_bottom_tray__part_0_bounds[0].x + (eggada50_bottom_tray__part_0_bounds[1].x - eggada50_bottom_tray__part_0_bounds[0].x) / 2
                let eggada50_bottom_tray__part_0_y = eggada50_bottom_tray__part_0_bounds[0].y + (eggada50_bottom_tray__part_0_bounds[1].y - eggada50_bottom_tray__part_0_bounds[0].y) / 2
                eggada50_bottom_tray__part_0 = translate([-eggada50_bottom_tray__part_0_x, -eggada50_bottom_tray__part_0_y, 0], eggada50_bottom_tray__part_0);
                eggada50_bottom_tray__part_0 = rotate([0,0,0], eggada50_bottom_tray__part_0);
                eggada50_bottom_tray__part_0 = translate([eggada50_bottom_tray__part_0_x, eggada50_bottom_tray__part_0_y, 0], eggada50_bottom_tray__part_0);

                eggada50_bottom_tray__part_0 = translate([-75,0,0], eggada50_bottom_tray__part_0);
                let result = eggada50_bottom_tray__part_0;
                
            

                // creating part 1 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_1 = _mcu_wall_cutout_extrude_7_5_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_1_bounds = eggada50_bottom_tray__part_1.getBounds();
                let eggada50_bottom_tray__part_1_x = eggada50_bottom_tray__part_1_bounds[0].x + (eggada50_bottom_tray__part_1_bounds[1].x - eggada50_bottom_tray__part_1_bounds[0].x) / 2
                let eggada50_bottom_tray__part_1_y = eggada50_bottom_tray__part_1_bounds[0].y + (eggada50_bottom_tray__part_1_bounds[1].y - eggada50_bottom_tray__part_1_bounds[0].y) / 2
                eggada50_bottom_tray__part_1 = translate([-eggada50_bottom_tray__part_1_x, -eggada50_bottom_tray__part_1_y, 0], eggada50_bottom_tray__part_1);
                eggada50_bottom_tray__part_1 = rotate([0,0,0], eggada50_bottom_tray__part_1);
                eggada50_bottom_tray__part_1 = translate([eggada50_bottom_tray__part_1_x, eggada50_bottom_tray__part_1_y, 0], eggada50_bottom_tray__part_1);

                eggada50_bottom_tray__part_1 = translate([-75,0,9.2], eggada50_bottom_tray__part_1);
                result = result.subtract(eggada50_bottom_tray__part_1);
                
            

                // creating part 2 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_2 = _power_reset_cutout_extrude_3_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_2_bounds = eggada50_bottom_tray__part_2.getBounds();
                let eggada50_bottom_tray__part_2_x = eggada50_bottom_tray__part_2_bounds[0].x + (eggada50_bottom_tray__part_2_bounds[1].x - eggada50_bottom_tray__part_2_bounds[0].x) / 2
                let eggada50_bottom_tray__part_2_y = eggada50_bottom_tray__part_2_bounds[0].y + (eggada50_bottom_tray__part_2_bounds[1].y - eggada50_bottom_tray__part_2_bounds[0].y) / 2
                eggada50_bottom_tray__part_2 = translate([-eggada50_bottom_tray__part_2_x, -eggada50_bottom_tray__part_2_y, 0], eggada50_bottom_tray__part_2);
                eggada50_bottom_tray__part_2 = rotate([0,0,0], eggada50_bottom_tray__part_2);
                eggada50_bottom_tray__part_2 = translate([eggada50_bottom_tray__part_2_x, eggada50_bottom_tray__part_2_y, 0], eggada50_bottom_tray__part_2);

                eggada50_bottom_tray__part_2 = translate([-75,0,7], eggada50_bottom_tray__part_2);
                result = result.subtract(eggada50_bottom_tray__part_2);
                
            

                // creating part 3 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_3 = _bottom_case_outer_outline_extrude_3_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_3_bounds = eggada50_bottom_tray__part_3.getBounds();
                let eggada50_bottom_tray__part_3_x = eggada50_bottom_tray__part_3_bounds[0].x + (eggada50_bottom_tray__part_3_bounds[1].x - eggada50_bottom_tray__part_3_bounds[0].x) / 2
                let eggada50_bottom_tray__part_3_y = eggada50_bottom_tray__part_3_bounds[0].y + (eggada50_bottom_tray__part_3_bounds[1].y - eggada50_bottom_tray__part_3_bounds[0].y) / 2
                eggada50_bottom_tray__part_3 = translate([-eggada50_bottom_tray__part_3_x, -eggada50_bottom_tray__part_3_y, 0], eggada50_bottom_tray__part_3);
                eggada50_bottom_tray__part_3 = rotate([0,0,0], eggada50_bottom_tray__part_3);
                eggada50_bottom_tray__part_3 = translate([eggada50_bottom_tray__part_3_x, eggada50_bottom_tray__part_3_y, 0], eggada50_bottom_tray__part_3);

                eggada50_bottom_tray__part_3 = translate([-75,0,0], eggada50_bottom_tray__part_3);
                result = result.union(eggada50_bottom_tray__part_3);
                
            

                // creating part 4 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_4 = _screws_extrude_3_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_4_bounds = eggada50_bottom_tray__part_4.getBounds();
                let eggada50_bottom_tray__part_4_x = eggada50_bottom_tray__part_4_bounds[0].x + (eggada50_bottom_tray__part_4_bounds[1].x - eggada50_bottom_tray__part_4_bounds[0].x) / 2
                let eggada50_bottom_tray__part_4_y = eggada50_bottom_tray__part_4_bounds[0].y + (eggada50_bottom_tray__part_4_bounds[1].y - eggada50_bottom_tray__part_4_bounds[0].y) / 2
                eggada50_bottom_tray__part_4 = translate([-eggada50_bottom_tray__part_4_x, -eggada50_bottom_tray__part_4_y, 0], eggada50_bottom_tray__part_4);
                eggada50_bottom_tray__part_4 = rotate([0,0,0], eggada50_bottom_tray__part_4);
                eggada50_bottom_tray__part_4 = translate([eggada50_bottom_tray__part_4_x, eggada50_bottom_tray__part_4_y, 0], eggada50_bottom_tray__part_4);

                eggada50_bottom_tray__part_4 = translate([-75,0,0], eggada50_bottom_tray__part_4);
                result = result.subtract(eggada50_bottom_tray__part_4);
                
            

                // creating part 5 of case eggada50_bottom_tray
                let eggada50_bottom_tray__part_5 = _screw_heads_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let eggada50_bottom_tray__part_5_bounds = eggada50_bottom_tray__part_5.getBounds();
                let eggada50_bottom_tray__part_5_x = eggada50_bottom_tray__part_5_bounds[0].x + (eggada50_bottom_tray__part_5_bounds[1].x - eggada50_bottom_tray__part_5_bounds[0].x) / 2
                let eggada50_bottom_tray__part_5_y = eggada50_bottom_tray__part_5_bounds[0].y + (eggada50_bottom_tray__part_5_bounds[1].y - eggada50_bottom_tray__part_5_bounds[0].y) / 2
                eggada50_bottom_tray__part_5 = translate([-eggada50_bottom_tray__part_5_x, -eggada50_bottom_tray__part_5_y, 0], eggada50_bottom_tray__part_5);
                eggada50_bottom_tray__part_5 = rotate([0,0,0], eggada50_bottom_tray__part_5);
                eggada50_bottom_tray__part_5 = translate([eggada50_bottom_tray__part_5_x, eggada50_bottom_tray__part_5_y, 0], eggada50_bottom_tray__part_5);

                eggada50_bottom_tray__part_5 = translate([-75,0,0], eggada50_bottom_tray__part_5);
                result = result.subtract(eggada50_bottom_tray__part_5);
                
            
                    return result;
                }
            
            
        
            function main() {
                return eggada50_bottom_tray_case_fn();
            }

        