//Workout and exercise constructors
var Workout = function(type, exercises) {
	this.type = type;
	this.exercises = exercises;
};

var exercises = function(name, description, visualDes) {
	this.name = name;
	this.description = description;
	this.visualDes = visualDes;
};

//chest exercises
var pushups = new exercises('pushups', 'Body in a straight line, feet together, arms shoulder width apart. Lower yourself to the floor till upper arms are parallel with the floor.', 'pushups visual description link here');
var cGPushups = new exercises('close-grip pushups', 'Body in a straight line, feet together, place hands close together. Lower yourself to the floor till upper arms are parallel with the floor', 'close grip pushups visual description link here');
var wGPushups = new exercises('wide-grip pushups', 'Body in a straight line, feet together, place hands wider than shoulder width apart. Lower yourself to the floor till upper arms are parallel width the floor', 'wide grip pushups visual description link here');
var sidePushups = new exercises('side pushups', 'Lying on your side, with your knees bent, floor side arm across your belly. Other arm in-line with pectorals. Perform a pushup, raising your boddy off of the ground.','side pushups visualDes link here');
var stagPushups = new exercises('staggered-arm pushups', 'Body in a straight line, feet together, place hands about shoulder width apart with one hand forward and one back. Alternate hands each repetition. Lower yourself to the floor till upper arms are parallel with the floor', 'staggered army pushupsvisual description link here');
var sLPushups = new exercises('single-leg pushups', 'Body in a straight line, one foot off the ground, alternated each repetition. Place hands shoulder width apart. Lower yourself to the ground till upper arms are parallel with the floor.', 'single leg pushups visual description link here');

//triceps exercises
var diamondPushups = new exercises('diamond pushups', 'Body in a straight line, make a diamond shape with index fingers and thumbs. Lower yourself to the floor till upper arms are parallel with floor. If it is too difficult, go to your knees.', 'visual description link here');
var dips = new exercises('dips', 'Arms about shoulder width apart, behind your back with feet extended in front of you. Bend arms at the elbows, concentrating on triceps.', 'visual description link here');
var triExtensions = new exercises('tricep extensions', 'Body in a straight line, facing the wall. Hands flat on the wall. Bring feet back till body is at a 45 degree angle. Bending at the elbow, extending arms to push body away from the wall.', 'visual description link here');

//back exercises
var RevSnowAngels = new exercises('reverse snow angels', 'Lying on the floor, with head facing downward, arms extended forward. Slowly bring hands backwards, towards the buttocks, keeping arms straight, and not touching the ground, to pinch the center of the back. Do not lift head off of the floor.', 'visual description link here');
var goodMornings = new exercises('good mornings', 'With feet about shoulder width apart, back straight, core tight, looking forward, bend, pushing your glutes back untill your back is parallel with the floor. Maintain a straight back, tight core, and always look forward.', 'visual description link here');
var supermans = new exercises('supermans', 'Lying on the floor, belly down, arms extended infront of you, legs straight, head forward. Lift legs and arms off the floor simultaneously, tightening the lower back.', 'visual description link here');
var bridge = new exercises('bridge', 'Lying back down, legs bent at the knees(as if you were doing situps), raise hips off the floor towards the sky, keeping shoulders planted on the ground.');
var pPlacePushups = new exercises('pike place pushups', 'Hands and feet on the floor, legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');
var swimmer = new exercises('swimmer', 'Lying belly down, arms and legs straight, with arms extended infront of you, lift right arm and left leg a few inches off the ground while keeping them straight. Alternate hands and feet every repetition.', 'visual description link here');

//biceps exercises
var curls = new exercises('curls', 'Grab anything you can hold, stand up straight, palms forward, lift weight only by bending arm at the elow. If it is too difficult, grab something lighter.', 'visual description link here');
var rows = new exercises('rows', 'Body in a straight line, back towards the ground. Hang under something stable that can support your weight. Place hands more than shoulder width apart, pull yourself towards what you are hanging from.', 'visual description link here');
var pullups = new exercises('pullups', 'Hang from a bar or something stable where good grip can be acheived, with palms facing forward. Hands should be wider than shoulder width. Pull yourself up till chin has reached the bar.', 'visual description link here');
var chinups = new exercises('chinups', 'Much like the pullup, you will need to hang from a bar. This time palms facing backwards, and about shoulder width apart. Pull yourself up untill chin has passed the bar.', 'visual description link here');

//legs exercises
var airSquats = new exercises('air squats', 'Feet shoulder width apart, back straight, facing forward, arms crossed over chest. Weight should be on your heels. Bend your knees untill thighs are parallel with the floor. Weight should be on heels the whole time(You should be able to wiggle your toes throughout the entire exercise).', 'visual description link here');
var lunges = new exercises('lunges', 'While standing, take an exaggerated step forward, bringing the stationary knee to the ground. Do not let your front knee extend past your toes.', 'visual description link here');
var calfRaises = new exercises('calf raises', 'Feet together, hold something with some weight to it if you like. Bring your heels off the ground, pressing down with your toes and the balls of your feet.', 'visual description link here');
var boxJumps = new exercises('box jumps', 'Find a stable, elevated surface. With one motion, both feet at the same time, jump up to the surface, then stand up straight, step down to avoid injury.', 'visual description link here');
var donkeyKicks = new exercises('donkey kicks', 'Start on your hands and knees, with your back straight. Bring one leg at a time straight backwards and up(like a donkey kicks). Alternate legs every repetition.', 'visual description link here');

//abs exercises
var crunches = new exercises('crunches', 'Lying on your back, with hands loosely on the back of your head, feet off the ground with knees bent. Tighten your abs to bring your shoulders off the ground', 'visual description link here');
var obliqueCrunches = new exercises('oblique crunches', 'These are performed like regular crunches, but attempt to bring your right elbow to your left side, and right elbow to your left.', 'visual description link here');
var weightedSitups = new exercises('weighted situps', 'Grab something with some weight to it, or do them without weights if you choose. Lying on your back, with knees bent and feet flat on the floor, use your abs to sit up straight. If it is too difficult, do it without weight', 'visual description link here');
var russianTwists = new exercises('russian twists', 'While sitting on the floor, knees bent, feet off the ground, slightly leaning back, hands together, twist from left and right touching the floor with hands on either side. Do not let your feet touch the ground.', 'visual description link here');
var legLifts = new exercises('leg lifts', 'Lying on your back, hands under your buttocks, legs straight and together, lift them to 90 degrees, then bring them back down to just above the ground, but not touching.', 'visual description link here');
var flutterKicks = new exercises('flutter kicks', 'Lying on your back, hands under your buttocks, bring legs up to 45 degrees and back down to just above the ground. Alternate legs as you would when you walk.', 'visual description link here');
var legClimbs = new exercises('leg climbs', 'Lying on your back, one leg bent at the knee, the other extended up towards the sky. Use your arms and abs to climb the extended leg, attempting to reach your foot.', 'visual description link here');
var dirtyDogs = new exercises('dirty dogs', 'Start on your hands and knees, back straight. Bring your right knee outward, keeping your knee bent. Repeat for left side.', 'visual description link here');

//shoulder exercises
var FeShoulderPushups = new exercises('feet-elevated shoulder pushups', 'Hands on the floor, feet elevated(bed works perfectly)legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');
var crabWalk = new exercises('crab walk', 'From a seated position on the ground, lift buttocks up, use feet and hands to scurry across the floor.', 'visual description link here');
var wGpullups = new exercises('wide-grip pullups', 'The same as a regular pullups, with a extra wide hand placement.', 'visual description link here');
var hStandPushups = new exercises('hand-stand wall pushups', 'Start with hands on the floor, feet towards the wall. Walk your feet up the wall untill almost verticle, lower head to the floor by bending arms at the elbow.', 'visual description link here');
var oneArmPushups = new exercises('one-arm pushups', 'Hands shoulder width apart, legs wider than shoulder width apart for stability. Place one arm behind your back and perform a pushup.', 'visual description link here');
var shoulderPushups = new exercises('shoulder pushups', 'Hands and feet on the floor, legs straight, back straight, create a V shape with your body(Bent, with buttocks in the air). Slight bend in the elbows. Bring head to the floor by bending elbows, while maintaining the V shape.', 'visual description link here');

//forearms exercises
var chairUps = new exercises('chair-ups', 'Lying on your belly, arms extended out infront of you, grab hold of the legs of a chair. Use your forearms to lift the chair a few inches off the ground, lower it back down but do not touch it to the floor.', 'visual description link here');
var staticChairUps = new exercises('static chair-ups', 'Like the chair-up, but hold it in position, instead of repetitions.', 'visual description link here');
var twistedSChairUps = new exercises('twisted static chair-ups', 'Like the static chair-up, but use your forearms to move the chair in a small circles movement.', 'visual description link here');
var fingerHangs = new exercises('finger hangs', 'Hang from a bar, or something else stable. Use only your fingers. Remove and add fingers to work different muscles in the forearms.', 'visual description link here');
var fingerPushups = new exercises('finger pushups', 'Regular pushup position, spread fingers wide and use them to lift your body weight(go to knees if it is too difficult).', 'visual description link here');
var forearmCurls = new exercises('forearm curls', 'Grab something with some weight to it, bending your arm at the wrist, curl the weight.', 'visual description link here');

//cardio exercises
var burpees = new exercises('burpees', 'From a standing position, drop down to pushup position, perform a pushup, eplode up, performing a jump, extending arms above head and clap, land in a standing position.', 'visual description link here');
var walkouts = new exercises('walkouts', 'From a standing position, bring your hands to the floor and walk them out infront of you untill you are in pushup position, perform a pushup if you like, then walk them back till you are standing.', 'visual description link here');
var jumpingLunges = new exercises('jumping lunges', 'From standing position, jump, landing in a lunge. make sure you keep good form(do not let your front knee extend out past your toes).', 'visual description link here');

//workouts
var chestWorkout = new Workout('chest', [pushups.name,' ' + cGPushups.name,' ' + wGPushups.name,' ' + sidePushups.name,' ' + stagPushups.name,' ' + sLPushups.name]);
var tricepsWorkout = new Workout('triceps', [diamondPushups.name,' ' + dips.name,' ' + triExtensions.name]);
var backWorkout = new Workout('back', [RevSnowAngels.name,' ' + goodMornings.name,' ' + supermans.name,' ' + bridge.name,' ' + pPlacePushups.name,' ' + swimmer.name, ' ' + rows.name]);
var bicepsWorkout = new Workout('biceps', [curls.name,' ' + rows.name,' ' + pullups.name,' ' + chinups.name]);
var legsWorkout = new Workout('legs', [airSquats.name,' ' + lunges.name,' ' + calfRaises.name,' ' + boxJumps.name,' ' + donkeyKicks.name]);
var absWorkout = new Workout('abs', [crunches.name,' ' + obliqueCrunches.name,' ' + weightedSitups.name,' ' + russianTwists.name,' ' + legLifts.name,' ' + flutterKicks.name,' ' + legClimbs.name,' ' + dirtyDogs.name]);
var shouldersWorkout = new Workout('shoulders', [FeShoulderPushups.name,' ' + crabWalk.name,' ' + wGpullups.name,' ' + hStandPushups.name,' ' + oneArmPushups.name,' ' + shoulderPushups.name]);
var forearmsWorkout = new Workout('forearms', [chairUps.name,' ' + staticChairUps.name,' ' + twistedSChairUps.name,' ' + fingerHangs.name,' ' + fingerPushups.name,' ' + forearmCurls.name]);
var cardioWorkout = new Workout('cardio', [burpees.name, ' ' + walkouts.name, ' ' + jumpingLunges.name, ' ' + pushups.name, ' ' + weightedSitups.name, ' ' + pullups.name]);

	$(document).ready(function() {
		$('#bmiResult').hide();
	});
	$('#Calculate').click(function(e) {
		e.preventDefault();
		var newWeight = $('#weight').val() * 703;
		var newHeight = $('#height').val() * $('#height').val();
		// var heightSquared = (newHeight * newHeight);
		var BMI = Math.round(newWeight / newHeight);
		if (BMI <= 18.5) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an underweight status.');
		}
		if (BMI > 18.5 && BMI <= 24.9) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have a normal weight status.');
		}
		if (BMI >=25 && BMI <= 29.9) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an overweight status.');
		}
		if (BMI >= 30) {
			$('#bmiResult').show().fadeIn('slow').text('You have a BMI of ' + BMI + '. You have an obese status.');
		}
	});
//**********************Chest page**********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});

$(document).ready(function() {
	$('#Pushups').click(function() {
		$('.descriptions').show(function() {
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(pushups.description);
				$('.visualDes').text(pushups.visualDes);
				$('#Pushups').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#CgPushups').click(function() {
		$('.descriptions').show(function() {	
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(cGPushups.description);
				$('.visualDes').text(cGPushups.visualDes);
				$('#CgPushups').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#WgPushups').click(function() {
		$('.descriptions').show(function() {
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(wGPushups.description);
				$('.visualDes').text(wGPushups.visualDes);
				$('#WgPushups').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#SidePu').click(function() {
		$('.descriptions').show(function() {
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(sidePushups.description);
				$('.visualDes').text(sidePushups.visualDes);
				$('#SidePu').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#StagPu').click(function() {
		$('.descriptions').show(function() {
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(stagPushups.description);
				$('.visualDes').text(stagPushups.visualDes);
				$('#StagPu').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#sLpushups').click(function() {
		$('.descriptions').show(function() {
			$('#chestDes, .visualDes').slideDown('slow', function() {
				$('#chestDes').text(sLPushups.description);
				$('.visualDes').text(sLpushups.visualDes);
				$('#sLpushups').mouseleave(function() {
					$('#chestDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
//*********************Triceps page*********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});

$(document).ready(function() {
	$('#diamond').click(function() {
		$('.descriptions').show(function() {
			$('#triDes, .visualDes').slideDown('slow', function() {
				$('#triDes').text(diamondPushups.description);
				$('.visualDes').text(diamondPushups.visualDes);
				$('#diamond').mouseleave(function() {
					$('#triDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#dips').click( function() {
		$('.descriptions').show(function() {
			$('#triDes, .visualDes').slideDown('slow', function() {
				$('#triDes').text(dips.description);
				$('.visualDes').text(dips.visualDes);
				$('#dips').mouseleave(function() {
					$('#triDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#triEx').click(function() {
		$('.descriptions').show(function() {
			$('#triDes, .visualDes').slideDown('slow', function() {
				$('#triDes').text(triExtensions.description);
				$('.visualDes').text(triExtensions.visualDes);
				$('#triEx').mouseleave(function() {
					$('#triDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
// // //**********************Biceps page*********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});

$(document).ready(function() {
	$('#curls').click(function() {
		$('.descriptions').show(function() {
			$('#biDes, .visualDes').slideDown('slow', function() {
				$('#biDes').text(curls.description);
				$('.visualDes').text(curls.visualDes);
				$('#curls').mouseleave(function() {
					$('#biDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#rows').click(function() {
		$('.descriptions').show(function() {
			$('#biDes, .visualDes').slideDown('slow', function() {
				$('#biDes').text(rows.description);
				$('.visualDes').text(rows.visualDes);
				$('#rows').mouseleave(function() {
					$('#biDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#pullups').click(function() {
		$('.descriptions').show(function() {
			$('#biDes, .visualDes').slideDown('slow', function() {
				$('#biDes').text(pullups.description);
				$('.visualDes').text(pullups.visualDes);
				$('#pullups').mouseleave(function() {
					$('#biDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#chinups').click(function() {
		$('.descriptions').show(function() {
			$('#biDes, .visualDes').slideDown('slow', function() {
				$('#biDes').text(chinups.description);
				$('.visualDes').text(chinups.visualDes);
				$('#chinups').mouseleave(function() {
					$('#biDes, .visualDes').slideUp('slow');
					// $('.visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
//***********************Abs page***********************

$(document).ready(function() {
	$('.descriptions').hide('fast');
});

$(document).ready(function() {
	$('#crunches').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(crunches.description);
				$('.visualDes').text(crunches.visualDes);
				$('#crunches').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#obCrunches').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes, .visualDes').text(obliqueCrunches.description);
				$('.visualDes').text(obliqueCrunches.visualDes);
				$('#obCrunches').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#weightSu').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes, .visualDes').text(weightedSitups.description);
				$('.visualDes').text(weightedSitups.visualDes);
				$('#weightSu').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#RussTwist').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(russianTwists.description);
				$('.visualDes').text(russianTwists.visualDes);
				$('#RussTwist').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#legLifts').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(legLifts.description);
				$('.visualDes').text(legLifts.visualDes);
				$('#legLifts').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#fluttKick').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(flutterKicks.description);
				$('.visualDes').text(flutterKicks.visualDes);
				$('#fluttKick').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#legClimb').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(legClimbs.description);
				$('.visualDes').text(legClimbs.visualDes);
				$('#legClimb').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#dirtyDog').click(function() {
		$('.descriptions').show(function() {
			$('#absDes, .visualDes').slideDown('slow', function() {
				$('#absDes').text(dirtyDogs.description);
				$('.visualDes').text(dirtyDogs.visualDes);
				$('#dirtyDog').mouseleave(function() {
					$('#absDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
// //**********************Back page***********************

$(document).ready(function() {
	$('.descriptions').hide('fast');
});
$(document).ready(function() {
	$('#RevSnowAngels').click(function() {
		$('.descriptions').show(function() {	
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(RevSnowAngels.description);
				$('.visualDes').text(RevSnowAngels.visualDes);
				$('#RevSnowAngels').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});	
	});
});
$(document).ready(function() {
	$('#goodMornings').click(function() {
		$('.descriptions').show(function() {
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(goodMornings.description);
				$('.visualDes').text(goodMornings.visualDes);
				$('#goodMornings').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#supermans').click(function() {
		$('.descriptions').show(function() {
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(supermans.description);
				$('.visualDes').text(supermans.visualDes);
				$('#supermans').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#dolphinKicks').click(function() {
		$('.descriptions').show(function() {	
			$('#backDes, .visualDes').slideToggle('slow', function() {
				$('#backDes').text(dolphinKicks.description);
				$('.visualDes').text(dolphinKicks.visualDes);
				$('#dolphinKicks').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#bridge').click(function() {
		$('.descriptions').show(function() {	
			$('#backDes, .visualDes').slideToggle('slow', function() {
				$('#backDes').text(bridge.description);
				$('.visualDes').text(bridge.visualDes);
				$('#bridge').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#pPlacePushups').click(function() {
		$('.descriptions').show(function() {	
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(pPlacePushups.description);
				$('.visualDes').text(pPlacePushups.visualDes);
				$('#pPlacePushups').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#swimmer').click(function() {
		$('.descriptions').show(function() {	
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(swimmer.description);
				$('.visualDes').text(swimmer.visualDes);
				$('#swimmer').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#rows').click(function() {
		$('.descriptions').show(function() {
			$('#backDes, .visualDes').slideDown('slow', function() {
				$('#backDes').text(rows.description);
				$('.visualDes').text(rows.visualDes);
				$('#rows').mouseleave(function() {
					$('#backDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
// //**********************Legs page***********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});
$(document).ready(function() {
	$('#airSquats').click(function() {
		$('.descriptions').show(function() {
			$('#legDes, .visualDes').slideDown('slow', function() {
				$('#legDes').text(airSquats.description);
				$('.visualDes').text(airSquats.visualDes);
				$('#airSquats').mouseleave(function() {
					$('#legDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#lunges').click(function() {
		$('.descriptions').show(function() {
			$('#legDes, .visualDes').slideDown('slow', function() {
				$('#legDes').text(lunges.description);
				$('.visualDes').text(lunges.visualDes);
				$('#lunges').mouseleave(function() {
					$('#legDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#calfRaises').click(function() {
		$('.descriptions').show(function() {
			$('#legDes, .visualDes').slideDown('slow', function() {
				$('#legDes').text(calfRaises.description);
				$('.visualDes').text(calfRaises.visualDes);
				$('#calfRaises').mouseleave(function() {
					$('#legDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#boxJumps').click(function() {
		$('.descriptions').show(function() {
			$('#legDes, .visualDes').slideDown('slow', function() {
				$('#legDes').text(boxJumps.description);
				$('.visualDes').text(boxJumps.visualDes);
				$('#boxJumps').mouseleave(function() {
					$('#legDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#donkeyKicks').click(function() {
		$('.descriptions').show(function() {
			$('#legDes, .visualDes').slideDown('slow', function() {
				$('#legDes').text(donkeyKicks.description);
				$('.visualDes').text(donkeyKicks.visualDes);
				$('#donkeyKicks').mouseleave(function() {
					$('#legDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
// //********************Forearms page*********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});
$(document).ready(function() {
	$('#chairUps').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(chairUps.description);
				$('.visualDes').text(chairUps.visualDes);
				$('#chairUps').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#staticChairups').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(staticChairUps.description);
				$('.visualDes').text(staticChairUps.visualDes);
				$('#staticChairups').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#twistedSChairUps').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(twistedSChairUps.description);
				$('.visualDes').text(twistedSChairUps.visualDes);
				$('#twistedSChairUps, .visualDes').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#fingerHangs').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(fingerHangs.description);
				$('.visualDes').text(fingerHangs.visualDes);
				$('#fingerHangs').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#fingerPushups').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(fingerPushups.description);
				$('.visualDes').text(fingerPushups.visualDes);
				$('#fingerPushups').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#forearmCurls').click(function() {
		$('.descriptions').show(function() {
			$('#foreDes, .visualDes').slideDown('slow', function() {
				$('#foreDes').text(forearmCurls.description);
				$('.visualDes').text(forearmCurls.visualDes);
				$('#forearmCurls').mouseleave(function() {
					$('#foreDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
// //********************Shoulders page********************
$(document).ready(function() {
	$('.descriptions').hide('fast');
});
$(document).ready(function() {
	$('#FeShoulderPushups').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(FeShoulderPushups.description);
				$('.visualDes').text(FeShoulderPushups.visualDes);
				$('#FeShoulderPushups').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#crabWalk').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(crabWalk.description);
				$('.visualDes').text(crabWalk.visualDes);
				$('#crabWalk').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#wGpullups').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(wGpullups.description);
				$('.visualDes').text(wGpullups.visualDes);
				$('#wGpullups').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#hStandPushups').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(hStandPushups.description);
				$('.visualDes').text(hStandPushups.visualDes);
				$('#hStandPushups').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#oneArmPushups').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(oneArmPushups.description);
				$('.visualDes').text(oneArmPushups.visualDes);
				$('#oneArmPushups').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#shoulderPushups').click(function() {
		$('.descriptions').show(function() {
			$('#shoulDes, .visualDes').slideDown('slow', function() {
				$('#shoulDes').text(shoulderPushups.description);
				$('.visualDes').text(shoulderPushups.visualDes);
				$('#shoulderPushups').mouseleave(function() {
					$('#shoulDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});	
	});
});
// //**********************cardio page*********************

$(document).ready(function() {
	$('.descriptions').hide('fast');
});
$(document).ready(function() {
	$('#Burpees').click(function() {
		$('.descriptions').show(function() {
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(burpees.description);
				$('.visualDes').text(burpees.visualDes);
				$('#Burpees').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#Walkouts').click(function() {
		$('.descriptions').show(function() {
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(walkouts.description);
				$('.visualDes').text(walkouts.visualDes);
				$('#Walkouts').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#Jumping').click(function() {
		$('.descriptions').show(function() {	
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(jumpingLunges.description);
				$('.visualDes').text(jumpingLunges.visualDes);
				$('#Jumping').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#Pushups').click(function() {
		$('.descriptions').show(function() {
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(pushups.description);
				$('.visualDes').text(pushups.visualDes);
				$('#Pushups').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#weightSu').click(function() {
		$('.descriptions').show(function() {	
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(weightedSitups.description);
				$('.visualDes').text(weightedSitups.visualDes);
				$('#weightSu').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
$(document).ready(function() {
	$('#Pullups').click(function() {
		$('.descriptions').show(function() {	
			$('#cardioDes, .visualDes').slideDown('slow', function() {
				$('#cardioDes').text(pullups.description);
				$('.visualDes').text(pullups.visualDes);
				$('#Pullups').mouseleave(function() {
					$('#cardioDes, .visualDes').slideUp('slow');
					$('.descriptions').hide('slow').finish();
				});
			});
		});
	});
});
//********************stopwatch*************************
	var time = 0;
	var running = 0;


	function startPause() {
		if(running == 0) {
		   running = 1;
		   increment();
		   document.getElementById('startPause').innerHTML = 'Pause';
		} else {
			running = 0;
			document.getElementById('startPause').innerHTML = 'Resume';
		}
	}

	function reset() {
		running = 0;
		time = 0;
		document.getElementById('startPause').innerHTML = 'Start';
		document.getElementById('output').innerHTML = '00:00:00';
	}

	function increment()
	 {
		if(running == 1) {
			setTimeout(function() {
				time++;
				var mins = Math.floor(time/10/60);
				var secs = Math.floor(time/10 % 60);
				var hours = Math.floor(time/10/60/60);
				var tenths = time % 10;

				if(mins < 10) {
					mins = '0' + mins;
				}
				if(secs < 10) {
					secs = '0' + secs;
				}
				document.getElementById('output').innerHTML = hours + ':' + mins + ':' + secs + ':' + tenths + '0';
				increment();
			}, 100)
		}
	}

//**************************Users******************************