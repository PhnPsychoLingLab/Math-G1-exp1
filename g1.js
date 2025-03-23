/*********** 
 * G1 *
 ***********/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'g1';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
var mic;
var mic;
var mic;
var mic;
var mic;
var mic;
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(exp1_introRoutineBegin());
flowScheduler.add(exp1_introRoutineEachFrame());
flowScheduler.add(exp1_introRoutineEnd());
const exp1_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_pre_trialsLoopBegin(exp1_pre_trialsLoopScheduler));
flowScheduler.add(exp1_pre_trialsLoopScheduler);
flowScheduler.add(exp1_pre_trialsLoopEnd);



flowScheduler.add(exp1_restRoutineBegin());
flowScheduler.add(exp1_restRoutineEachFrame());
flowScheduler.add(exp1_restRoutineEnd());
const exp1_main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp1_main_trialsLoopBegin(exp1_main_trialsLoopScheduler));
flowScheduler.add(exp1_main_trialsLoopScheduler);
flowScheduler.add(exp1_main_trialsLoopEnd);



flowScheduler.add(exp1_endRoutineBegin());
flowScheduler.add(exp1_endRoutineEachFrame());
flowScheduler.add(exp1_endRoutineEnd());
flowScheduler.add(exp2_introRoutineBegin());
flowScheduler.add(exp2_introRoutineEachFrame());
flowScheduler.add(exp2_introRoutineEnd());
const exp2_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_pre_trialsLoopBegin(exp2_pre_trialsLoopScheduler));
flowScheduler.add(exp2_pre_trialsLoopScheduler);
flowScheduler.add(exp2_pre_trialsLoopEnd);



flowScheduler.add(exp2_restRoutineBegin());
flowScheduler.add(exp2_restRoutineEachFrame());
flowScheduler.add(exp2_restRoutineEnd());
const exp2_main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp2_main_trialsLoopBegin(exp2_main_trialsLoopScheduler));
flowScheduler.add(exp2_main_trialsLoopScheduler);
flowScheduler.add(exp2_main_trialsLoopEnd);



flowScheduler.add(exp2_endRoutineBegin());
flowScheduler.add(exp2_endRoutineEachFrame());
flowScheduler.add(exp2_endRoutineEnd());
flowScheduler.add(exp3_introRoutineBegin());
flowScheduler.add(exp3_introRoutineEachFrame());
flowScheduler.add(exp3_introRoutineEnd());
const exp3_pre_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp3_pre_trialsLoopBegin(exp3_pre_trialsLoopScheduler));
flowScheduler.add(exp3_pre_trialsLoopScheduler);
flowScheduler.add(exp3_pre_trialsLoopEnd);



flowScheduler.add(exp3_restRoutineBegin());
flowScheduler.add(exp3_restRoutineEachFrame());
flowScheduler.add(exp3_restRoutineEnd());
const exp3_main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp3_main_trialsLoopBegin(exp3_main_trialsLoopScheduler));
flowScheduler.add(exp3_main_trialsLoopScheduler);
flowScheduler.add(exp3_main_trialsLoopEnd);



flowScheduler.add(exp3_endRoutineBegin());
flowScheduler.add(exp3_endRoutineEachFrame());
flowScheduler.add(exp3_endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'pre.csv', 'path': 'pre.csv'},
    {'name': './exp1_pre/G1_exp1_pre1.png', 'path': './exp1_pre/G1_exp1_pre1.png'},
    {'name': './exp2_pre/G1_exp2_pre1.png', 'path': './exp2_pre/G1_exp2_pre1.png'},
    {'name': './exp1_pre/G1_exp1_pre2.png', 'path': './exp1_pre/G1_exp1_pre2.png'},
    {'name': './exp2_pre/G1_exp2_pre2.png', 'path': './exp2_pre/G1_exp2_pre2.png'},
    {'name': './exp1_pre/G1_exp1_pre3.png', 'path': './exp1_pre/G1_exp1_pre3.png'},
    {'name': './exp2_pre/G1_exp2_pre3.png', 'path': './exp2_pre/G1_exp2_pre3.png'},
    {'name': 'main.csv', 'path': 'main.csv'},
    {'name': './exp1_main/G1_exp1_main1.png', 'path': './exp1_main/G1_exp1_main1.png'},
    {'name': './exp2_main/G1_exp2_main1.png', 'path': './exp2_main/G1_exp2_main1.png'},
    {'name': './exp3_main/G1_exp3_main1.png', 'path': './exp3_main/G1_exp3_main1.png'},
    {'name': './exp1_main/G1_exp1_main2.png', 'path': './exp1_main/G1_exp1_main2.png'},
    {'name': './exp2_main/G1_exp2_main2.png', 'path': './exp2_main/G1_exp2_main2.png'},
    {'name': './exp3_main/G1_exp3_main2.png', 'path': './exp3_main/G1_exp3_main2.png'},
    {'name': './exp1_main/G1_exp1_main3.png', 'path': './exp1_main/G1_exp1_main3.png'},
    {'name': './exp2_main/G1_exp2_main3.png', 'path': './exp2_main/G1_exp2_main3.png'},
    {'name': './exp3_main/G1_exp3_main3.png', 'path': './exp3_main/G1_exp3_main3.png'},
    {'name': './exp1_main/G1_exp1_main4.png', 'path': './exp1_main/G1_exp1_main4.png'},
    {'name': './exp2_main/G1_exp2_main4.png', 'path': './exp2_main/G1_exp2_main4.png'},
    {'name': './exp3_main/G1_exp3_main4.png', 'path': './exp3_main/G1_exp3_main4.png'},
    {'name': './exp1_main/G1_exp1_main5.png', 'path': './exp1_main/G1_exp1_main5.png'},
    {'name': './exp2_main/G1_exp2_main5.png', 'path': './exp2_main/G1_exp2_main5.png'},
    {'name': './exp1_main/G1_exp1_main6.png', 'path': './exp1_main/G1_exp1_main6.png'},
    {'name': './exp2_main/G1_exp2_main6.png', 'path': './exp2_main/G1_exp2_main6.png'},
    {'name': './exp3_main/G1_exp3_main6.png', 'path': './exp3_main/G1_exp3_main6.png'},
    {'name': './exp1_main/G1_exp1_main7.png', 'path': './exp1_main/G1_exp1_main7.png'},
    {'name': './exp2_main/G1_exp2_main7.png', 'path': './exp2_main/G1_exp2_main7.png'},
    {'name': './exp3_main/G1_exp3_main7.png', 'path': './exp3_main/G1_exp3_main7.png'},
    {'name': './exp1_main/G1_exp1_main8.png', 'path': './exp1_main/G1_exp1_main8.png'},
    {'name': './exp2_main/G1_exp2_main8.png', 'path': './exp2_main/G1_exp2_main8.png'},
    {'name': './exp3_main/G1_exp3_main8.png', 'path': './exp3_main/G1_exp3_main8.png'},
    {'name': './exp1_main/G1_exp1_main9.png', 'path': './exp1_main/G1_exp1_main9.png'},
    {'name': './exp2_main/G1_exp2_main9.png', 'path': './exp2_main/G1_exp2_main9.png'},
    {'name': './exp3_main/G1_exp3_main9.png', 'path': './exp3_main/G1_exp3_main9.png'},
    {'name': './exp1_main/G1_exp1_main10.png', 'path': './exp1_main/G1_exp1_main10.png'},
    {'name': './exp2_main/G1_exp2_main10.png', 'path': './exp2_main/G1_exp2_main10.png'},
    {'name': './exp3_main/G1_exp3_main10.png', 'path': './exp3_main/G1_exp3_main10.png'},
    {'name': './exp1_main/G1_exp1_main11.png', 'path': './exp1_main/G1_exp1_main11.png'},
    {'name': './exp2_main/G1_exp2_main11.png', 'path': './exp2_main/G1_exp2_main11.png'},
    {'name': './exp3_main/G1_exp3_main11.png', 'path': './exp3_main/G1_exp3_main11.png'},
    {'name': './exp1_main/G1_exp1_main12.png', 'path': './exp1_main/G1_exp1_main12.png'},
    {'name': './exp2_main/G1_exp2_main12.png', 'path': './exp2_main/G1_exp2_main12.png'},
    {'name': './exp3_main/G1_exp3_main12.png', 'path': './exp3_main/G1_exp3_main12.png'},
    {'name': './exp1_main/G1_exp1_main13.png', 'path': './exp1_main/G1_exp1_main13.png'},
    {'name': './exp2_main/G1_exp2_main13.png', 'path': './exp2_main/G1_exp2_main13.png'},
    {'name': './exp3_main/G1_exp3_main13.png', 'path': './exp3_main/G1_exp3_main13.png'},
    {'name': './exp1_main/G1_exp1_main14.png', 'path': './exp1_main/G1_exp1_main14.png'},
    {'name': './exp2_main/G1_exp2_main14.png', 'path': './exp2_main/G1_exp2_main14.png'},
    {'name': './exp3_main/G1_exp3_main14.png', 'path': './exp3_main/G1_exp3_main14.png'},
    {'name': './exp1_main/G1_exp1_main15.png', 'path': './exp1_main/G1_exp1_main15.png'},
    {'name': './exp2_main/G1_exp2_main15.png', 'path': './exp2_main/G1_exp2_main15.png'},
    {'name': 'pre.csv', 'path': 'pre.csv'},
    {'name': './exp1_pre/G1_exp1_pre1.png', 'path': './exp1_pre/G1_exp1_pre1.png'},
    {'name': './exp2_pre/G1_exp2_pre1.png', 'path': './exp2_pre/G1_exp2_pre1.png'},
    {'name': './exp1_pre/G1_exp1_pre2.png', 'path': './exp1_pre/G1_exp1_pre2.png'},
    {'name': './exp2_pre/G1_exp2_pre2.png', 'path': './exp2_pre/G1_exp2_pre2.png'},
    {'name': './exp1_pre/G1_exp1_pre3.png', 'path': './exp1_pre/G1_exp1_pre3.png'},
    {'name': './exp2_pre/G1_exp2_pre3.png', 'path': './exp2_pre/G1_exp2_pre3.png'},
    {'name': 'main.csv', 'path': 'main.csv'},
    {'name': './exp1_main/G1_exp1_main1.png', 'path': './exp1_main/G1_exp1_main1.png'},
    {'name': './exp2_main/G1_exp2_main1.png', 'path': './exp2_main/G1_exp2_main1.png'},
    {'name': './exp3_main/G1_exp3_main1.png', 'path': './exp3_main/G1_exp3_main1.png'},
    {'name': './exp1_main/G1_exp1_main2.png', 'path': './exp1_main/G1_exp1_main2.png'},
    {'name': './exp2_main/G1_exp2_main2.png', 'path': './exp2_main/G1_exp2_main2.png'},
    {'name': './exp3_main/G1_exp3_main2.png', 'path': './exp3_main/G1_exp3_main2.png'},
    {'name': './exp1_main/G1_exp1_main3.png', 'path': './exp1_main/G1_exp1_main3.png'},
    {'name': './exp2_main/G1_exp2_main3.png', 'path': './exp2_main/G1_exp2_main3.png'},
    {'name': './exp3_main/G1_exp3_main3.png', 'path': './exp3_main/G1_exp3_main3.png'},
    {'name': './exp1_main/G1_exp1_main4.png', 'path': './exp1_main/G1_exp1_main4.png'},
    {'name': './exp2_main/G1_exp2_main4.png', 'path': './exp2_main/G1_exp2_main4.png'},
    {'name': './exp3_main/G1_exp3_main4.png', 'path': './exp3_main/G1_exp3_main4.png'},
    {'name': './exp1_main/G1_exp1_main5.png', 'path': './exp1_main/G1_exp1_main5.png'},
    {'name': './exp2_main/G1_exp2_main5.png', 'path': './exp2_main/G1_exp2_main5.png'},
    {'name': './exp1_main/G1_exp1_main6.png', 'path': './exp1_main/G1_exp1_main6.png'},
    {'name': './exp2_main/G1_exp2_main6.png', 'path': './exp2_main/G1_exp2_main6.png'},
    {'name': './exp3_main/G1_exp3_main6.png', 'path': './exp3_main/G1_exp3_main6.png'},
    {'name': './exp1_main/G1_exp1_main7.png', 'path': './exp1_main/G1_exp1_main7.png'},
    {'name': './exp2_main/G1_exp2_main7.png', 'path': './exp2_main/G1_exp2_main7.png'},
    {'name': './exp3_main/G1_exp3_main7.png', 'path': './exp3_main/G1_exp3_main7.png'},
    {'name': './exp1_main/G1_exp1_main8.png', 'path': './exp1_main/G1_exp1_main8.png'},
    {'name': './exp2_main/G1_exp2_main8.png', 'path': './exp2_main/G1_exp2_main8.png'},
    {'name': './exp3_main/G1_exp3_main8.png', 'path': './exp3_main/G1_exp3_main8.png'},
    {'name': './exp1_main/G1_exp1_main9.png', 'path': './exp1_main/G1_exp1_main9.png'},
    {'name': './exp2_main/G1_exp2_main9.png', 'path': './exp2_main/G1_exp2_main9.png'},
    {'name': './exp3_main/G1_exp3_main9.png', 'path': './exp3_main/G1_exp3_main9.png'},
    {'name': './exp1_main/G1_exp1_main10.png', 'path': './exp1_main/G1_exp1_main10.png'},
    {'name': './exp2_main/G1_exp2_main10.png', 'path': './exp2_main/G1_exp2_main10.png'},
    {'name': './exp3_main/G1_exp3_main10.png', 'path': './exp3_main/G1_exp3_main10.png'},
    {'name': './exp1_main/G1_exp1_main11.png', 'path': './exp1_main/G1_exp1_main11.png'},
    {'name': './exp2_main/G1_exp2_main11.png', 'path': './exp2_main/G1_exp2_main11.png'},
    {'name': './exp3_main/G1_exp3_main11.png', 'path': './exp3_main/G1_exp3_main11.png'},
    {'name': './exp1_main/G1_exp1_main12.png', 'path': './exp1_main/G1_exp1_main12.png'},
    {'name': './exp2_main/G1_exp2_main12.png', 'path': './exp2_main/G1_exp2_main12.png'},
    {'name': './exp3_main/G1_exp3_main12.png', 'path': './exp3_main/G1_exp3_main12.png'},
    {'name': './exp1_main/G1_exp1_main13.png', 'path': './exp1_main/G1_exp1_main13.png'},
    {'name': './exp2_main/G1_exp2_main13.png', 'path': './exp2_main/G1_exp2_main13.png'},
    {'name': './exp3_main/G1_exp3_main13.png', 'path': './exp3_main/G1_exp3_main13.png'},
    {'name': './exp1_main/G1_exp1_main14.png', 'path': './exp1_main/G1_exp1_main14.png'},
    {'name': './exp2_main/G1_exp2_main14.png', 'path': './exp2_main/G1_exp2_main14.png'},
    {'name': './exp3_main/G1_exp3_main14.png', 'path': './exp3_main/G1_exp3_main14.png'},
    {'name': './exp1_main/G1_exp1_main15.png', 'path': './exp1_main/G1_exp1_main15.png'},
    {'name': './exp2_main/G1_exp2_main15.png', 'path': './exp2_main/G1_exp2_main15.png'},
    {'name': 'pre_exp3.csv', 'path': 'pre_exp3.csv'},
    {'name': './exp3_pre/G1_exp3_pre1.png', 'path': './exp3_pre/G1_exp3_pre1.png'},
    {'name': './exp3_pre/G1_exp3_pre2.png', 'path': './exp3_pre/G1_exp3_pre2.png'},
    {'name': 'main_exp3.csv', 'path': 'main_exp3.csv'},
    {'name': './exp3_main/G1_exp3_main1.png', 'path': './exp3_main/G1_exp3_main1.png'},
    {'name': './exp3_main/G1_exp3_main2.png', 'path': './exp3_main/G1_exp3_main2.png'},
    {'name': './exp3_main/G1_exp3_main3.png', 'path': './exp3_main/G1_exp3_main3.png'},
    {'name': './exp3_main/G1_exp3_main4.png', 'path': './exp3_main/G1_exp3_main4.png'},
    {'name': './exp3_main/G1_exp3_main5.png', 'path': './exp3_main/G1_exp3_main5.png'},
    {'name': './exp3_main/G1_exp3_main6.png', 'path': './exp3_main/G1_exp3_main6.png'},
    {'name': './exp3_main/G1_exp3_main7.png', 'path': './exp3_main/G1_exp3_main7.png'},
    {'name': './exp3_main/G1_exp3_main8.png', 'path': './exp3_main/G1_exp3_main8.png'},
    {'name': './exp3_main/G1_exp3_main9.png', 'path': './exp3_main/G1_exp3_main9.png'},
    {'name': './exp3_main/G1_exp3_main10.png', 'path': './exp3_main/G1_exp3_main10.png'},
    {'name': './exp3_main/G1_exp3_main11.png', 'path': './exp3_main/G1_exp3_main11.png'},
    {'name': './exp3_main/G1_exp3_main12.png', 'path': './exp3_main/G1_exp3_main12.png'},
    {'name': './exp3_main/G1_exp3_main13.png', 'path': './exp3_main/G1_exp3_main13.png'},
    {'name': './exp3_main/G1_exp3_main14.png', 'path': './exp3_main/G1_exp3_main14.png'},
    {'name': 'page/homepage.png', 'path': 'page/homepage.png'},
    {'name': 'page/G1_exp1_intro.png', 'path': 'page/G1_exp1_intro.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'page/nextQ.png', 'path': 'page/nextQ.png'},
    {'name': 'page/pre_end.png', 'path': 'page/pre_end.png'},
    {'name': 'page/main_end.png', 'path': 'page/main_end.png'},
    {'name': 'page/G1_exp2_intro.png', 'path': 'page/G1_exp2_intro.png'},
    {'name': 'page/G1_exp3_intro.png', 'path': 'page/G1_exp3_intro.png'},
    {'name': 'page/outtro.png', 'path': 'page/outtro.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var helloClock;
var mic_perms_text_string;
var hello_np;
var hello_bg;
var exp1_introClock;
var exp1_intro_np;
var exp1_intro_bg;
var exp1_preClock;
var mic;
var exp1_pre_a4;
var exp1_pre_a3;
var exp1_pre_a2;
var exp1_pre_a1;
var exp1_pre_bg;
var nextQClock;
var nextQ_bg;
var exp1_restClock;
var exp1_rest_np;
var exp1_rest_bg;
var exp1_mainClock;
var exp1_main_a4;
var exp1_main_a3;
var exp1_main_a2;
var exp1_main_a1;
var exp1_main_bg;
var exp1_endClock;
var exp1_end_np;
var exp1_end_bg;
var exp2_introClock;
var exp2_intro_np;
var exp2_intro_bg;
var exp2_preClock;
var exp2_pre_a4;
var exp2_pre_a3;
var exp2_pre_a2;
var exp2_pre_a1;
var exp2_pre_bg;
var exp2_restClock;
var exp2_rest_np;
var exp2_rest_bg;
var exp2_mainClock;
var exp2_main_a4;
var exp2_main_a3;
var exp2_main_a2;
var exp2_main_a1;
var exp2_main_bg;
var exp2_endClock;
var exp2_end_np;
var exp2_end_bg;
var exp3_introClock;
var exp3_intro_np;
var exp3_intro_bg;
var exp3_preClock;
var exp3_pre_bg;
var next_page;
var exp3_restClock;
var exp3_rest_np;
var exp3_rest_bg;
var exp3_mainClock;
var exp3_main_bg;
var next_page_2;
var exp3_endClock;
var exp3_end_bg;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  mic_perms_text_string = "Please grant permission to access your microphone if asked.\n\nThen, press space to continue.";
  
  // If browser supports getUserMedia(), request 
  // microphone permissions
  
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    console.log("getUserMedia supported.");
    navigator.mediaDevices
      .getUserMedia(
        // constraints - only audio needed for this app
        {
          audio: true,
          video: false,
        }
      )
  
      // Success callback
      .then((stream) => {
          mic_perms_text_string = "Please grant permission to access your microphone if asked.\n\nThen, press space to continue.";
          console.log("ACTIVE?");
          console.log(stream.active);
              if (stream.active) {
                  continueRoutine = false;
              }
          })
  
      // Error callback
      .catch((err) => {
        console.error(`The following getUserMedia error occurred: ${err}`);
        mic_perms_text_string = "Microphone access has been denied. Please refresh the page and grant permission to access your microphone.";
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
    mic_perms_text_string = "Sorry, it seems your browser isn't supported.  Please try a different browser.";
  }
  hello_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'hello_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.22)],
    letterHeight: 0.05,
    size: [0.4, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  hello_np.clock = new util.Clock();
  
  hello_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'hello_bg', units : undefined, 
    image : 'page/homepage.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "exp1_intro"
  exp1_introClock = new util.Clock();
  exp1_intro_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_intro_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp1_intro_np.clock = new util.Clock();
  
  exp1_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_intro_bg', units : undefined, 
    image : 'page/G1_exp1_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp1_pre"
  exp1_preClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp1_pre_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a4',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp1_pre_a4.clock = new util.Clock();
  
  exp1_pre_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a3',
    text: '""',
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_pre_a3.clock = new util.Clock();
  
  exp1_pre_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a2',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp1_pre_a2.clock = new util.Clock();
  
  exp1_pre_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_pre_a1',
    text: '""',
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp1_pre_a1.clock = new util.Clock();
  
  exp1_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "nextQ"
  nextQClock = new util.Clock();
  nextQ_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextQ_bg', units : undefined, 
    image : 'page/nextQ.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "exp1_rest"
  exp1_restClock = new util.Clock();
  exp1_rest_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_rest_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.14)],
    letterHeight: 0.05,
    size: [0.7, 0.13],
    ori: 0.0
    ,
    depth: 0
  });
  exp1_rest_np.clock = new util.Clock();
  
  exp1_rest_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_rest_bg', units : undefined, 
    image : 'page/pre_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp1_main"
  exp1_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code_2
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp1_main_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a4',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp1_main_a4.clock = new util.Clock();
  
  exp1_main_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a3',
    text: '""',
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp1_main_a3.clock = new util.Clock();
  
  exp1_main_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a2',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp1_main_a2.clock = new util.Clock();
  
  exp1_main_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_main_a1',
    text: '""',
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp1_main_a1.clock = new util.Clock();
  
  exp1_main_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_main_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "exp1_end"
  exp1_endClock = new util.Clock();
  exp1_end_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp1_end_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.225)],
    letterHeight: 0.05,
    size: [0.4, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp1_end_np.clock = new util.Clock();
  
  exp1_end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp1_end_bg', units : undefined, 
    image : 'page/main_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp2_intro"
  exp2_introClock = new util.Clock();
  exp2_intro_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_intro_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp2_intro_np.clock = new util.Clock();
  
  exp2_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_intro_bg', units : undefined, 
    image : 'page/G1_exp2_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp2_pre"
  exp2_preClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code_3
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp2_pre_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a4',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp2_pre_a4.clock = new util.Clock();
  
  exp2_pre_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a3',
    text: '""',
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp2_pre_a3.clock = new util.Clock();
  
  exp2_pre_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a2',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp2_pre_a2.clock = new util.Clock();
  
  exp2_pre_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_pre_a1',
    text: '""',
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp2_pre_a1.clock = new util.Clock();
  
  exp2_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "exp2_rest"
  exp2_restClock = new util.Clock();
  exp2_rest_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_rest_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.14)],
    letterHeight: 0.05,
    size: [0.7, 0.13],
    ori: 0.0
    ,
    depth: 0
  });
  exp2_rest_np.clock = new util.Clock();
  
  exp2_rest_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_rest_bg', units : undefined, 
    image : 'page/pre_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp2_main"
  exp2_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code_4
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp2_main_a4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a4',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [(- 1.0), 1.0, 1.0],
    colorSpace: 'rgb',
    pos: [0.4, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -1
  });
  exp2_main_a4.clock = new util.Clock();
  
  exp2_main_a3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a3',
    text: '""',
    fillColor: [1.0, 0.7882, 0.5373],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0.14, (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -2
  });
  exp2_main_a3.clock = new util.Clock();
  
  exp2_main_a2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a2',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.12), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -3
  });
  exp2_main_a2.clock = new util.Clock();
  
  exp2_main_a1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_main_a1',
    text: '""',
    fillColor: [0.8824, 0.9451, 1.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [(- 0.38), (- 0.3)],
    letterHeight: 0.05,
    size: [0.25, 0.08],
    ori: 0.0
    ,
    depth: -4
  });
  exp2_main_a1.clock = new util.Clock();
  
  exp2_main_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_main_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "exp2_end"
  exp2_endClock = new util.Clock();
  exp2_end_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp2_end_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.225)],
    letterHeight: 0.05,
    size: [0.4, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp2_end_np.clock = new util.Clock();
  
  exp2_end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp2_end_bg', units : undefined, 
    image : 'page/main_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp3_intro"
  exp3_introClock = new util.Clock();
  exp3_intro_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp3_intro_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.27)],
    letterHeight: 0.05,
    size: [0.55, 0.08],
    ori: 0.0
    ,
    depth: 0
  });
  exp3_intro_np.clock = new util.Clock();
  
  exp3_intro_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_intro_bg', units : undefined, 
    image : 'page/G1_exp3_intro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp3_pre"
  exp3_preClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code_5
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp3_pre_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_pre_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  next_page = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_page',
    text: '⮕',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.07,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  next_page.clock = new util.Clock();
  
  // Initialize components for Routine "exp3_rest"
  exp3_restClock = new util.Clock();
  exp3_rest_np = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'exp3_rest_np',
    text: '""',
    fillColor: [0.0, 0.0, 0.0],
    borderColor: [0.0, 0.0, 0.0],
    color: [0.0, 0.0, 0.0],
    colorSpace: 'rgb',
    pos: [0, (- 0.14)],
    letterHeight: 0.05,
    size: [0.7, 0.13],
    ori: 0.0
    ,
    depth: 0
  });
  exp3_rest_np.clock = new util.Clock();
  
  exp3_rest_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_rest_bg', units : undefined, 
    image : 'page/pre_end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "exp3_main"
  exp3_mainClock = new util.Clock();
  // Run 'Begin Experiment' code from mic_code_6
    mic = new sound.Microphone({
      win : psychoJS.window, 
      name:'mic',
      sampleRateHz : 44100,
      format: "audio/wav",
      channels : 'mono',
      maxRecordingSize : 24000.0,
      loopback : true,
      policyWhenFull : 'ignore',
    });
  exp3_main_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_main_bg', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  next_page_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_page_2',
    text: '⮕',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.07,
    size: [0.3, 0.3],
    ori: 0.0
    ,
    depth: -2
  });
  next_page_2.clock = new util.Clock();
  
  // Initialize components for Routine "exp3_end"
  exp3_endClock = new util.Clock();
  exp3_end_bg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'exp3_end_bg', units : undefined, 
    image : 'page/outtro.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.344, 0.756],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var helloMaxDurationReached;
var helloMaxDuration;
var helloComponents;
function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hello' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    helloClock.reset();
    routineTimer.reset();
    helloMaxDurationReached = false;
    // update component parameters for each repeat
    // reset hello_np to account for continued clicks & clear times on/off
    hello_np.reset()
    psychoJS.experiment.addData('hello.started', globalClock.getTime());
    helloMaxDuration = null
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(hello_np);
    helloComponents.push(hello_bg);
    
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function helloRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hello' ---
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hello_np* updates
    if (t >= 0 && hello_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_np.tStart = t;  // (not accounting for frame time here)
      hello_np.frameNStart = frameN;  // exact frame index
      
      hello_np.setAutoDraw(true);
    }
    
    if (hello_np.status === PsychoJS.Status.STARTED) {
      // check whether hello_np has been pressed
      if (hello_np.isClicked) {
        if (!hello_np.wasClicked) {
          // store time of first click
          hello_np.timesOn.push(hello_np.clock.getTime());
          // store time clicked until
          hello_np.timesOff.push(hello_np.clock.getTime());
        } else {
          // update time clicked until;
          hello_np.timesOff[hello_np.timesOff.length - 1] = hello_np.clock.getTime();
        }
        if (!hello_np.wasClicked) {
          // end routine when hello_np is clicked
          continueRoutine = false;
          
        }
        // if hello_np is still clicked next frame, it is not a new click
        hello_np.wasClicked = true;
      } else {
        // if hello_np is clicked next frame, it is a new click
        hello_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if hello_np hasn't started / has finished
      hello_np.clock.reset();
      // if hello_np is clicked next frame, it is a new click
      hello_np.wasClicked = false;
    }
    
    // *hello_bg* updates
    if (t >= 0 && hello_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_bg.tStart = t;  // (not accounting for frame time here)
      hello_bg.frameNStart = frameN;  // exact frame index
      
      hello_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function helloRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hello' ---
    for (const thisComponent of helloComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hello.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hello_np.numClicks', hello_np.numClicks);
    psychoJS.experiment.addData('hello_np.timesOn', hello_np.timesOn);
    psychoJS.experiment.addData('hello_np.timesOff', hello_np.timesOff);
    // the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_introMaxDurationReached;
var exp1_introMaxDuration;
var exp1_introComponents;
function exp1_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_introClock.reset();
    routineTimer.reset();
    exp1_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_intro_np to account for continued clicks & clear times on/off
    exp1_intro_np.reset()
    psychoJS.experiment.addData('exp1_intro.started', globalClock.getTime());
    exp1_introMaxDuration = null
    // keep track of which components have finished
    exp1_introComponents = [];
    exp1_introComponents.push(exp1_intro_np);
    exp1_introComponents.push(exp1_intro_bg);
    
    for (const thisComponent of exp1_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_intro' ---
    // get current time
    t = exp1_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_intro_np* updates
    if (t >= 0 && exp1_intro_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_np.tStart = t;  // (not accounting for frame time here)
      exp1_intro_np.frameNStart = frameN;  // exact frame index
      
      exp1_intro_np.setAutoDraw(true);
    }
    
    if (exp1_intro_np.status === PsychoJS.Status.STARTED) {
      // check whether exp1_intro_np has been pressed
      if (exp1_intro_np.isClicked) {
        if (!exp1_intro_np.wasClicked) {
          // store time of first click
          exp1_intro_np.timesOn.push(exp1_intro_np.clock.getTime());
          // store time clicked until
          exp1_intro_np.timesOff.push(exp1_intro_np.clock.getTime());
        } else {
          // update time clicked until;
          exp1_intro_np.timesOff[exp1_intro_np.timesOff.length - 1] = exp1_intro_np.clock.getTime();
        }
        if (!exp1_intro_np.wasClicked) {
          // end routine when exp1_intro_np is clicked
          continueRoutine = false;
          
        }
        // if exp1_intro_np is still clicked next frame, it is not a new click
        exp1_intro_np.wasClicked = true;
      } else {
        // if exp1_intro_np is clicked next frame, it is a new click
        exp1_intro_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_intro_np hasn't started / has finished
      exp1_intro_np.clock.reset();
      // if exp1_intro_np is clicked next frame, it is a new click
      exp1_intro_np.wasClicked = false;
    }
    
    // *exp1_intro_bg* updates
    if (t >= 0.0 && exp1_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp1_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp1_intro_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp1_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_intro' ---
    for (const thisComponent of exp1_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_intro_np.numClicks', exp1_intro_np.numClicks);
    psychoJS.experiment.addData('exp1_intro_np.timesOn', exp1_intro_np.timesOn);
    psychoJS.experiment.addData('exp1_intro_np.timesOff', exp1_intro_np.timesOff);
    // the Routine "exp1_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_pre_trials;
function exp1_pre_trialsLoopBegin(exp1_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pre.csv',
      seed: undefined, name: 'exp1_pre_trials'
    });
    psychoJS.experiment.addLoop(exp1_pre_trials); // add the loop to the experiment
    currentLoop = exp1_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_pre_trial of exp1_pre_trials) {
      snapshot = exp1_pre_trials.getSnapshot();
      exp1_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(exp1_preRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp1_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp1_pre_trialsLoopScheduler.add(exp1_pre_trialsLoopEndIteration(exp1_pre_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_pre_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp1_main_trials;
function exp1_main_trialsLoopBegin(exp1_main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp1_main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'main.csv',
      seed: undefined, name: 'exp1_main_trials'
    });
    psychoJS.experiment.addLoop(exp1_main_trials); // add the loop to the experiment
    currentLoop = exp1_main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp1_main_trial of exp1_main_trials) {
      snapshot = exp1_main_trials.getSnapshot();
      exp1_main_trialsLoopScheduler.add(importConditions(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineBegin(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineEachFrame());
      exp1_main_trialsLoopScheduler.add(exp1_mainRoutineEnd(snapshot));
      exp1_main_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp1_main_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp1_main_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp1_main_trialsLoopScheduler.add(exp1_main_trialsLoopEndIteration(exp1_main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp1_main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp1_main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp1_main_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp2_pre_trials;
function exp2_pre_trialsLoopBegin(exp2_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pre.csv',
      seed: undefined, name: 'exp2_pre_trials'
    });
    psychoJS.experiment.addLoop(exp2_pre_trials); // add the loop to the experiment
    currentLoop = exp2_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp2_pre_trial of exp2_pre_trials) {
      snapshot = exp2_pre_trials.getSnapshot();
      exp2_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_preRoutineBegin(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_preRoutineEachFrame());
      exp2_pre_trialsLoopScheduler.add(exp2_preRoutineEnd(snapshot));
      exp2_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp2_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp2_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp2_pre_trialsLoopScheduler.add(exp2_pre_trialsLoopEndIteration(exp2_pre_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_pre_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp2_main_trials;
function exp2_main_trialsLoopBegin(exp2_main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp2_main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'main.csv',
      seed: undefined, name: 'exp2_main_trials'
    });
    psychoJS.experiment.addLoop(exp2_main_trials); // add the loop to the experiment
    currentLoop = exp2_main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp2_main_trial of exp2_main_trials) {
      snapshot = exp2_main_trials.getSnapshot();
      exp2_main_trialsLoopScheduler.add(importConditions(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineBegin(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineEachFrame());
      exp2_main_trialsLoopScheduler.add(exp2_mainRoutineEnd(snapshot));
      exp2_main_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp2_main_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp2_main_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp2_main_trialsLoopScheduler.add(exp2_main_trialsLoopEndIteration(exp2_main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp2_main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp2_main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp2_main_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp3_pre_trials;
function exp3_pre_trialsLoopBegin(exp3_pre_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp3_pre_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pre_exp3.csv',
      seed: undefined, name: 'exp3_pre_trials'
    });
    psychoJS.experiment.addLoop(exp3_pre_trials); // add the loop to the experiment
    currentLoop = exp3_pre_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp3_pre_trial of exp3_pre_trials) {
      snapshot = exp3_pre_trials.getSnapshot();
      exp3_pre_trialsLoopScheduler.add(importConditions(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(exp3_preRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp3_pre_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp3_pre_trialsLoopScheduler.add(exp3_pre_trialsLoopEndIteration(exp3_pre_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp3_pre_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp3_pre_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp3_pre_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp3_main_trials;
function exp3_main_trialsLoopBegin(exp3_main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp3_main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'main_exp3.csv',
      seed: undefined, name: 'exp3_main_trials'
    });
    psychoJS.experiment.addLoop(exp3_main_trials); // add the loop to the experiment
    currentLoop = exp3_main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp3_main_trial of exp3_main_trials) {
      snapshot = exp3_main_trials.getSnapshot();
      exp3_main_trialsLoopScheduler.add(importConditions(snapshot));
      exp3_main_trialsLoopScheduler.add(exp3_mainRoutineBegin(snapshot));
      exp3_main_trialsLoopScheduler.add(exp3_mainRoutineEachFrame());
      exp3_main_trialsLoopScheduler.add(exp3_mainRoutineEnd(snapshot));
      exp3_main_trialsLoopScheduler.add(nextQRoutineBegin(snapshot));
      exp3_main_trialsLoopScheduler.add(nextQRoutineEachFrame());
      exp3_main_trialsLoopScheduler.add(nextQRoutineEnd(snapshot));
      exp3_main_trialsLoopScheduler.add(exp3_main_trialsLoopEndIteration(exp3_main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exp3_main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp3_main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp3_main_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var exp1_preMaxDurationReached;
var exp1_preMaxDuration;
var exp1_preComponents;
function exp1_preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_preClock.reset();
    routineTimer.reset();
    exp1_preMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_pre_a4 to account for continued clicks & clear times on/off
    exp1_pre_a4.reset()
    // reset exp1_pre_a3 to account for continued clicks & clear times on/off
    exp1_pre_a3.reset()
    // reset exp1_pre_a2 to account for continued clicks & clear times on/off
    exp1_pre_a2.reset()
    // reset exp1_pre_a1 to account for continued clicks & clear times on/off
    exp1_pre_a1.reset()
    exp1_pre_bg.setImage(exp1_pre_stimuli);
    psychoJS.experiment.addData('exp1_pre.started', globalClock.getTime());
    exp1_preMaxDuration = null
    // keep track of which components have finished
    exp1_preComponents = [];
    exp1_preComponents.push(exp1_pre_a4);
    exp1_preComponents.push(exp1_pre_a3);
    exp1_preComponents.push(exp1_pre_a2);
    exp1_preComponents.push(exp1_pre_a1);
    exp1_preComponents.push(exp1_pre_bg);
    
    for (const thisComponent of exp1_preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_pre' ---
    // get current time
    t = exp1_preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp1_pre_a4* updates
    if (t >= 0 && exp1_pre_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a4.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a4.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a4.setAutoDraw(true);
    }
    
    if (exp1_pre_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a4 has been pressed
      if (exp1_pre_a4.isClicked) {
        if (!exp1_pre_a4.wasClicked) {
          // store time of first click
          exp1_pre_a4.timesOn.push(exp1_pre_a4.clock.getTime());
          // store time clicked until
          exp1_pre_a4.timesOff.push(exp1_pre_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a4.timesOff[exp1_pre_a4.timesOff.length - 1] = exp1_pre_a4.clock.getTime();
        }
        if (!exp1_pre_a4.wasClicked) {
          // end routine when exp1_pre_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a4 is still clicked next frame, it is not a new click
        exp1_pre_a4.wasClicked = true;
      } else {
        // if exp1_pre_a4 is clicked next frame, it is a new click
        exp1_pre_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a4 hasn't started / has finished
      exp1_pre_a4.clock.reset();
      // if exp1_pre_a4 is clicked next frame, it is a new click
      exp1_pre_a4.wasClicked = false;
    }
    
    // *exp1_pre_a3* updates
    if (t >= 0 && exp1_pre_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a3.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a3.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a3.setAutoDraw(true);
    }
    
    if (exp1_pre_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a3 has been pressed
      if (exp1_pre_a3.isClicked) {
        if (!exp1_pre_a3.wasClicked) {
          // store time of first click
          exp1_pre_a3.timesOn.push(exp1_pre_a3.clock.getTime());
          // store time clicked until
          exp1_pre_a3.timesOff.push(exp1_pre_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a3.timesOff[exp1_pre_a3.timesOff.length - 1] = exp1_pre_a3.clock.getTime();
        }
        if (!exp1_pre_a3.wasClicked) {
          // end routine when exp1_pre_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a3 is still clicked next frame, it is not a new click
        exp1_pre_a3.wasClicked = true;
      } else {
        // if exp1_pre_a3 is clicked next frame, it is a new click
        exp1_pre_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a3 hasn't started / has finished
      exp1_pre_a3.clock.reset();
      // if exp1_pre_a3 is clicked next frame, it is a new click
      exp1_pre_a3.wasClicked = false;
    }
    
    // *exp1_pre_a2* updates
    if (t >= 0 && exp1_pre_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a2.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a2.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a2.setAutoDraw(true);
    }
    
    if (exp1_pre_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a2 has been pressed
      if (exp1_pre_a2.isClicked) {
        if (!exp1_pre_a2.wasClicked) {
          // store time of first click
          exp1_pre_a2.timesOn.push(exp1_pre_a2.clock.getTime());
          // store time clicked until
          exp1_pre_a2.timesOff.push(exp1_pre_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a2.timesOff[exp1_pre_a2.timesOff.length - 1] = exp1_pre_a2.clock.getTime();
        }
        if (!exp1_pre_a2.wasClicked) {
          // end routine when exp1_pre_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a2 is still clicked next frame, it is not a new click
        exp1_pre_a2.wasClicked = true;
      } else {
        // if exp1_pre_a2 is clicked next frame, it is a new click
        exp1_pre_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a2 hasn't started / has finished
      exp1_pre_a2.clock.reset();
      // if exp1_pre_a2 is clicked next frame, it is a new click
      exp1_pre_a2.wasClicked = false;
    }
    
    // *exp1_pre_a1* updates
    if (t >= 0 && exp1_pre_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_a1.tStart = t;  // (not accounting for frame time here)
      exp1_pre_a1.frameNStart = frameN;  // exact frame index
      
      exp1_pre_a1.setAutoDraw(true);
    }
    
    if (exp1_pre_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp1_pre_a1 has been pressed
      if (exp1_pre_a1.isClicked) {
        if (!exp1_pre_a1.wasClicked) {
          // store time of first click
          exp1_pre_a1.timesOn.push(exp1_pre_a1.clock.getTime());
          // store time clicked until
          exp1_pre_a1.timesOff.push(exp1_pre_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp1_pre_a1.timesOff[exp1_pre_a1.timesOff.length - 1] = exp1_pre_a1.clock.getTime();
        }
        if (!exp1_pre_a1.wasClicked) {
          // end routine when exp1_pre_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp1_pre_a1 is still clicked next frame, it is not a new click
        exp1_pre_a1.wasClicked = true;
      } else {
        // if exp1_pre_a1 is clicked next frame, it is a new click
        exp1_pre_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_pre_a1 hasn't started / has finished
      exp1_pre_a1.clock.reset();
      // if exp1_pre_a1 is clicked next frame, it is a new click
      exp1_pre_a1.wasClicked = false;
    }
    
    // *exp1_pre_bg* updates
    if (t >= 0.0 && exp1_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp1_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp1_pre_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp1_preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var thisFilename;
function exp1_preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_pre' ---
    for (const thisComponent of exp1_preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_pre.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp1_pre_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('exp1_pre_a4.numClicks', exp1_pre_a4.numClicks);
    psychoJS.experiment.addData('exp1_pre_a4.timesOn', exp1_pre_a4.timesOn);
    psychoJS.experiment.addData('exp1_pre_a4.timesOff', exp1_pre_a4.timesOff);
    psychoJS.experiment.addData('exp1_pre_a3.numClicks', exp1_pre_a3.numClicks);
    psychoJS.experiment.addData('exp1_pre_a3.timesOn', exp1_pre_a3.timesOn);
    psychoJS.experiment.addData('exp1_pre_a3.timesOff', exp1_pre_a3.timesOff);
    psychoJS.experiment.addData('exp1_pre_a2.numClicks', exp1_pre_a2.numClicks);
    psychoJS.experiment.addData('exp1_pre_a2.timesOn', exp1_pre_a2.timesOn);
    psychoJS.experiment.addData('exp1_pre_a2.timesOff', exp1_pre_a2.timesOff);
    psychoJS.experiment.addData('exp1_pre_a1.numClicks', exp1_pre_a1.numClicks);
    psychoJS.experiment.addData('exp1_pre_a1.timesOn', exp1_pre_a1.timesOn);
    psychoJS.experiment.addData('exp1_pre_a1.timesOff', exp1_pre_a1.timesOff);
    // the Routine "exp1_pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nextQMaxDurationReached;
var nextQMaxDuration;
var nextQComponents;
function nextQRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'nextQ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    nextQClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    nextQMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('nextQ.started', globalClock.getTime());
    nextQMaxDuration = null
    // keep track of which components have finished
    nextQComponents = [];
    nextQComponents.push(nextQ_bg);
    
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function nextQRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'nextQ' ---
    // get current time
    t = nextQClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nextQ_bg* updates
    if (t >= 0.0 && nextQ_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextQ_bg.tStart = t;  // (not accounting for frame time here)
      nextQ_bg.frameNStart = frameN;  // exact frame index
      
      nextQ_bg.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nextQ_bg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nextQ_bg.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of nextQComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function nextQRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'nextQ' ---
    for (const thisComponent of nextQComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('nextQ.stopped', globalClock.getTime());
    if (nextQMaxDurationReached) {
        nextQClock.add(nextQMaxDuration);
    } else {
        nextQClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_restMaxDurationReached;
var exp1_restMaxDuration;
var exp1_restComponents;
function exp1_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_restClock.reset();
    routineTimer.reset();
    exp1_restMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_rest_np to account for continued clicks & clear times on/off
    exp1_rest_np.reset()
    psychoJS.experiment.addData('exp1_rest.started', globalClock.getTime());
    exp1_restMaxDuration = null
    // keep track of which components have finished
    exp1_restComponents = [];
    exp1_restComponents.push(exp1_rest_np);
    exp1_restComponents.push(exp1_rest_bg);
    
    for (const thisComponent of exp1_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_rest' ---
    // get current time
    t = exp1_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_rest_np* updates
    if (t >= 0 && exp1_rest_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_rest_np.tStart = t;  // (not accounting for frame time here)
      exp1_rest_np.frameNStart = frameN;  // exact frame index
      
      exp1_rest_np.setAutoDraw(true);
    }
    
    if (exp1_rest_np.status === PsychoJS.Status.STARTED) {
      // check whether exp1_rest_np has been pressed
      if (exp1_rest_np.isClicked) {
        if (!exp1_rest_np.wasClicked) {
          // store time of first click
          exp1_rest_np.timesOn.push(exp1_rest_np.clock.getTime());
          // store time clicked until
          exp1_rest_np.timesOff.push(exp1_rest_np.clock.getTime());
        } else {
          // update time clicked until;
          exp1_rest_np.timesOff[exp1_rest_np.timesOff.length - 1] = exp1_rest_np.clock.getTime();
        }
        if (!exp1_rest_np.wasClicked) {
          // end routine when exp1_rest_np is clicked
          continueRoutine = false;
          
        }
        // if exp1_rest_np is still clicked next frame, it is not a new click
        exp1_rest_np.wasClicked = true;
      } else {
        // if exp1_rest_np is clicked next frame, it is a new click
        exp1_rest_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_rest_np hasn't started / has finished
      exp1_rest_np.clock.reset();
      // if exp1_rest_np is clicked next frame, it is a new click
      exp1_rest_np.wasClicked = false;
    }
    
    // *exp1_rest_bg* updates
    if (t >= 0.0 && exp1_rest_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_rest_bg.tStart = t;  // (not accounting for frame time here)
      exp1_rest_bg.frameNStart = frameN;  // exact frame index
      
      exp1_rest_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp1_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_rest' ---
    for (const thisComponent of exp1_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_rest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_rest_np.numClicks', exp1_rest_np.numClicks);
    psychoJS.experiment.addData('exp1_rest_np.timesOn', exp1_rest_np.timesOn);
    psychoJS.experiment.addData('exp1_rest_np.timesOff', exp1_rest_np.timesOff);
    // the Routine "exp1_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_mainMaxDurationReached;
var exp1_mainMaxDuration;
var exp1_mainComponents;
function exp1_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_mainClock.reset();
    routineTimer.reset();
    exp1_mainMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_main_a4 to account for continued clicks & clear times on/off
    exp1_main_a4.reset()
    // reset exp1_main_a3 to account for continued clicks & clear times on/off
    exp1_main_a3.reset()
    // reset exp1_main_a2 to account for continued clicks & clear times on/off
    exp1_main_a2.reset()
    // reset exp1_main_a1 to account for continued clicks & clear times on/off
    exp1_main_a1.reset()
    exp1_main_bg.setImage(exp1_main_stimuli);
    psychoJS.experiment.addData('exp1_main.started', globalClock.getTime());
    exp1_mainMaxDuration = null
    // keep track of which components have finished
    exp1_mainComponents = [];
    exp1_mainComponents.push(exp1_main_a4);
    exp1_mainComponents.push(exp1_main_a3);
    exp1_mainComponents.push(exp1_main_a2);
    exp1_mainComponents.push(exp1_main_a1);
    exp1_mainComponents.push(exp1_main_bg);
    
    for (const thisComponent of exp1_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_main' ---
    // get current time
    t = exp1_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp1_main_a4* updates
    if (t >= 0 && exp1_main_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a4.tStart = t;  // (not accounting for frame time here)
      exp1_main_a4.frameNStart = frameN;  // exact frame index
      
      exp1_main_a4.setAutoDraw(true);
    }
    
    if (exp1_main_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a4 has been pressed
      if (exp1_main_a4.isClicked) {
        if (!exp1_main_a4.wasClicked) {
          // store time of first click
          exp1_main_a4.timesOn.push(exp1_main_a4.clock.getTime());
          // store time clicked until
          exp1_main_a4.timesOff.push(exp1_main_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a4.timesOff[exp1_main_a4.timesOff.length - 1] = exp1_main_a4.clock.getTime();
        }
        if (!exp1_main_a4.wasClicked) {
          // end routine when exp1_main_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a4 is still clicked next frame, it is not a new click
        exp1_main_a4.wasClicked = true;
      } else {
        // if exp1_main_a4 is clicked next frame, it is a new click
        exp1_main_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a4 hasn't started / has finished
      exp1_main_a4.clock.reset();
      // if exp1_main_a4 is clicked next frame, it is a new click
      exp1_main_a4.wasClicked = false;
    }
    
    // *exp1_main_a3* updates
    if (t >= 0 && exp1_main_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a3.tStart = t;  // (not accounting for frame time here)
      exp1_main_a3.frameNStart = frameN;  // exact frame index
      
      exp1_main_a3.setAutoDraw(true);
    }
    
    if (exp1_main_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a3 has been pressed
      if (exp1_main_a3.isClicked) {
        if (!exp1_main_a3.wasClicked) {
          // store time of first click
          exp1_main_a3.timesOn.push(exp1_main_a3.clock.getTime());
          // store time clicked until
          exp1_main_a3.timesOff.push(exp1_main_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a3.timesOff[exp1_main_a3.timesOff.length - 1] = exp1_main_a3.clock.getTime();
        }
        if (!exp1_main_a3.wasClicked) {
          // end routine when exp1_main_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a3 is still clicked next frame, it is not a new click
        exp1_main_a3.wasClicked = true;
      } else {
        // if exp1_main_a3 is clicked next frame, it is a new click
        exp1_main_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a3 hasn't started / has finished
      exp1_main_a3.clock.reset();
      // if exp1_main_a3 is clicked next frame, it is a new click
      exp1_main_a3.wasClicked = false;
    }
    
    // *exp1_main_a2* updates
    if (t >= 0 && exp1_main_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a2.tStart = t;  // (not accounting for frame time here)
      exp1_main_a2.frameNStart = frameN;  // exact frame index
      
      exp1_main_a2.setAutoDraw(true);
    }
    
    if (exp1_main_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a2 has been pressed
      if (exp1_main_a2.isClicked) {
        if (!exp1_main_a2.wasClicked) {
          // store time of first click
          exp1_main_a2.timesOn.push(exp1_main_a2.clock.getTime());
          // store time clicked until
          exp1_main_a2.timesOff.push(exp1_main_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a2.timesOff[exp1_main_a2.timesOff.length - 1] = exp1_main_a2.clock.getTime();
        }
        if (!exp1_main_a2.wasClicked) {
          // end routine when exp1_main_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a2 is still clicked next frame, it is not a new click
        exp1_main_a2.wasClicked = true;
      } else {
        // if exp1_main_a2 is clicked next frame, it is a new click
        exp1_main_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a2 hasn't started / has finished
      exp1_main_a2.clock.reset();
      // if exp1_main_a2 is clicked next frame, it is a new click
      exp1_main_a2.wasClicked = false;
    }
    
    // *exp1_main_a1* updates
    if (t >= 0 && exp1_main_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_a1.tStart = t;  // (not accounting for frame time here)
      exp1_main_a1.frameNStart = frameN;  // exact frame index
      
      exp1_main_a1.setAutoDraw(true);
    }
    
    if (exp1_main_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp1_main_a1 has been pressed
      if (exp1_main_a1.isClicked) {
        if (!exp1_main_a1.wasClicked) {
          // store time of first click
          exp1_main_a1.timesOn.push(exp1_main_a1.clock.getTime());
          // store time clicked until
          exp1_main_a1.timesOff.push(exp1_main_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp1_main_a1.timesOff[exp1_main_a1.timesOff.length - 1] = exp1_main_a1.clock.getTime();
        }
        if (!exp1_main_a1.wasClicked) {
          // end routine when exp1_main_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp1_main_a1 is still clicked next frame, it is not a new click
        exp1_main_a1.wasClicked = true;
      } else {
        // if exp1_main_a1 is clicked next frame, it is a new click
        exp1_main_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_main_a1 hasn't started / has finished
      exp1_main_a1.clock.reset();
      // if exp1_main_a1 is clicked next frame, it is a new click
      exp1_main_a1.wasClicked = false;
    }
    
    // *exp1_main_bg* updates
    if (t >= 0.0 && exp1_main_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_main_bg.tStart = t;  // (not accounting for frame time here)
      exp1_main_bg.frameNStart = frameN;  // exact frame index
      
      exp1_main_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp1_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_main' ---
    for (const thisComponent of exp1_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_main.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp1_main_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('exp1_main_a4.numClicks', exp1_main_a4.numClicks);
    psychoJS.experiment.addData('exp1_main_a4.timesOn', exp1_main_a4.timesOn);
    psychoJS.experiment.addData('exp1_main_a4.timesOff', exp1_main_a4.timesOff);
    psychoJS.experiment.addData('exp1_main_a3.numClicks', exp1_main_a3.numClicks);
    psychoJS.experiment.addData('exp1_main_a3.timesOn', exp1_main_a3.timesOn);
    psychoJS.experiment.addData('exp1_main_a3.timesOff', exp1_main_a3.timesOff);
    psychoJS.experiment.addData('exp1_main_a2.numClicks', exp1_main_a2.numClicks);
    psychoJS.experiment.addData('exp1_main_a2.timesOn', exp1_main_a2.timesOn);
    psychoJS.experiment.addData('exp1_main_a2.timesOff', exp1_main_a2.timesOff);
    psychoJS.experiment.addData('exp1_main_a1.numClicks', exp1_main_a1.numClicks);
    psychoJS.experiment.addData('exp1_main_a1.timesOn', exp1_main_a1.timesOn);
    psychoJS.experiment.addData('exp1_main_a1.timesOff', exp1_main_a1.timesOff);
    // the Routine "exp1_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp1_endMaxDurationReached;
var exp1_endMaxDuration;
var exp1_endComponents;
function exp1_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp1_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp1_endClock.reset();
    routineTimer.reset();
    exp1_endMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp1_end_np to account for continued clicks & clear times on/off
    exp1_end_np.reset()
    psychoJS.experiment.addData('exp1_end.started', globalClock.getTime());
    exp1_endMaxDuration = null
    // keep track of which components have finished
    exp1_endComponents = [];
    exp1_endComponents.push(exp1_end_np);
    exp1_endComponents.push(exp1_end_bg);
    
    for (const thisComponent of exp1_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp1_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp1_end' ---
    // get current time
    t = exp1_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp1_end_np* updates
    if (t >= 0 && exp1_end_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_np.tStart = t;  // (not accounting for frame time here)
      exp1_end_np.frameNStart = frameN;  // exact frame index
      
      exp1_end_np.setAutoDraw(true);
    }
    
    if (exp1_end_np.status === PsychoJS.Status.STARTED) {
      // check whether exp1_end_np has been pressed
      if (exp1_end_np.isClicked) {
        if (!exp1_end_np.wasClicked) {
          // store time of first click
          exp1_end_np.timesOn.push(exp1_end_np.clock.getTime());
          // store time clicked until
          exp1_end_np.timesOff.push(exp1_end_np.clock.getTime());
        } else {
          // update time clicked until;
          exp1_end_np.timesOff[exp1_end_np.timesOff.length - 1] = exp1_end_np.clock.getTime();
        }
        if (!exp1_end_np.wasClicked) {
          // end routine when exp1_end_np is clicked
          continueRoutine = false;
          
        }
        // if exp1_end_np is still clicked next frame, it is not a new click
        exp1_end_np.wasClicked = true;
      } else {
        // if exp1_end_np is clicked next frame, it is a new click
        exp1_end_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp1_end_np hasn't started / has finished
      exp1_end_np.clock.reset();
      // if exp1_end_np is clicked next frame, it is a new click
      exp1_end_np.wasClicked = false;
    }
    
    // *exp1_end_bg* updates
    if (t >= 0.0 && exp1_end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp1_end_bg.tStart = t;  // (not accounting for frame time here)
      exp1_end_bg.frameNStart = frameN;  // exact frame index
      
      exp1_end_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp1_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp1_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp1_end' ---
    for (const thisComponent of exp1_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp1_end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp1_end_np.numClicks', exp1_end_np.numClicks);
    psychoJS.experiment.addData('exp1_end_np.timesOn', exp1_end_np.timesOn);
    psychoJS.experiment.addData('exp1_end_np.timesOff', exp1_end_np.timesOff);
    // the Routine "exp1_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_introMaxDurationReached;
var exp2_introMaxDuration;
var exp2_introComponents;
function exp2_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_introClock.reset();
    routineTimer.reset();
    exp2_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_intro_np to account for continued clicks & clear times on/off
    exp2_intro_np.reset()
    psychoJS.experiment.addData('exp2_intro.started', globalClock.getTime());
    exp2_introMaxDuration = null
    // keep track of which components have finished
    exp2_introComponents = [];
    exp2_introComponents.push(exp2_intro_np);
    exp2_introComponents.push(exp2_intro_bg);
    
    for (const thisComponent of exp2_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_intro' ---
    // get current time
    t = exp2_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_intro_np* updates
    if (t >= 0 && exp2_intro_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_intro_np.tStart = t;  // (not accounting for frame time here)
      exp2_intro_np.frameNStart = frameN;  // exact frame index
      
      exp2_intro_np.setAutoDraw(true);
    }
    
    if (exp2_intro_np.status === PsychoJS.Status.STARTED) {
      // check whether exp2_intro_np has been pressed
      if (exp2_intro_np.isClicked) {
        if (!exp2_intro_np.wasClicked) {
          // store time of first click
          exp2_intro_np.timesOn.push(exp2_intro_np.clock.getTime());
          // store time clicked until
          exp2_intro_np.timesOff.push(exp2_intro_np.clock.getTime());
        } else {
          // update time clicked until;
          exp2_intro_np.timesOff[exp2_intro_np.timesOff.length - 1] = exp2_intro_np.clock.getTime();
        }
        if (!exp2_intro_np.wasClicked) {
          // end routine when exp2_intro_np is clicked
          continueRoutine = false;
          
        }
        // if exp2_intro_np is still clicked next frame, it is not a new click
        exp2_intro_np.wasClicked = true;
      } else {
        // if exp2_intro_np is clicked next frame, it is a new click
        exp2_intro_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_intro_np hasn't started / has finished
      exp2_intro_np.clock.reset();
      // if exp2_intro_np is clicked next frame, it is a new click
      exp2_intro_np.wasClicked = false;
    }
    
    // *exp2_intro_bg* updates
    if (t >= 0.0 && exp2_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp2_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp2_intro_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp2_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_intro' ---
    for (const thisComponent of exp2_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp2_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_intro_np.numClicks', exp2_intro_np.numClicks);
    psychoJS.experiment.addData('exp2_intro_np.timesOn', exp2_intro_np.timesOn);
    psychoJS.experiment.addData('exp2_intro_np.timesOff', exp2_intro_np.timesOff);
    // the Routine "exp2_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_preMaxDurationReached;
var exp2_preMaxDuration;
var exp2_preComponents;
function exp2_preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_preClock.reset();
    routineTimer.reset();
    exp2_preMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_pre_a4 to account for continued clicks & clear times on/off
    exp2_pre_a4.reset()
    // reset exp2_pre_a3 to account for continued clicks & clear times on/off
    exp2_pre_a3.reset()
    // reset exp2_pre_a2 to account for continued clicks & clear times on/off
    exp2_pre_a2.reset()
    // reset exp2_pre_a1 to account for continued clicks & clear times on/off
    exp2_pre_a1.reset()
    exp2_pre_bg.setImage(exp2_pre_stimuli);
    psychoJS.experiment.addData('exp2_pre.started', globalClock.getTime());
    exp2_preMaxDuration = null
    // keep track of which components have finished
    exp2_preComponents = [];
    exp2_preComponents.push(exp2_pre_a4);
    exp2_preComponents.push(exp2_pre_a3);
    exp2_preComponents.push(exp2_pre_a2);
    exp2_preComponents.push(exp2_pre_a1);
    exp2_preComponents.push(exp2_pre_bg);
    
    for (const thisComponent of exp2_preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_pre' ---
    // get current time
    t = exp2_preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp2_pre_a4* updates
    if (t >= 0 && exp2_pre_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a4.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a4.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a4.setAutoDraw(true);
    }
    
    if (exp2_pre_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a4 has been pressed
      if (exp2_pre_a4.isClicked) {
        if (!exp2_pre_a4.wasClicked) {
          // store time of first click
          exp2_pre_a4.timesOn.push(exp2_pre_a4.clock.getTime());
          // store time clicked until
          exp2_pre_a4.timesOff.push(exp2_pre_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a4.timesOff[exp2_pre_a4.timesOff.length - 1] = exp2_pre_a4.clock.getTime();
        }
        if (!exp2_pre_a4.wasClicked) {
          // end routine when exp2_pre_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a4 is still clicked next frame, it is not a new click
        exp2_pre_a4.wasClicked = true;
      } else {
        // if exp2_pre_a4 is clicked next frame, it is a new click
        exp2_pre_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a4 hasn't started / has finished
      exp2_pre_a4.clock.reset();
      // if exp2_pre_a4 is clicked next frame, it is a new click
      exp2_pre_a4.wasClicked = false;
    }
    
    // *exp2_pre_a3* updates
    if (t >= 0 && exp2_pre_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a3.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a3.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a3.setAutoDraw(true);
    }
    
    if (exp2_pre_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a3 has been pressed
      if (exp2_pre_a3.isClicked) {
        if (!exp2_pre_a3.wasClicked) {
          // store time of first click
          exp2_pre_a3.timesOn.push(exp2_pre_a3.clock.getTime());
          // store time clicked until
          exp2_pre_a3.timesOff.push(exp2_pre_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a3.timesOff[exp2_pre_a3.timesOff.length - 1] = exp2_pre_a3.clock.getTime();
        }
        if (!exp2_pre_a3.wasClicked) {
          // end routine when exp2_pre_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a3 is still clicked next frame, it is not a new click
        exp2_pre_a3.wasClicked = true;
      } else {
        // if exp2_pre_a3 is clicked next frame, it is a new click
        exp2_pre_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a3 hasn't started / has finished
      exp2_pre_a3.clock.reset();
      // if exp2_pre_a3 is clicked next frame, it is a new click
      exp2_pre_a3.wasClicked = false;
    }
    
    // *exp2_pre_a2* updates
    if (t >= 0 && exp2_pre_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a2.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a2.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a2.setAutoDraw(true);
    }
    
    if (exp2_pre_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a2 has been pressed
      if (exp2_pre_a2.isClicked) {
        if (!exp2_pre_a2.wasClicked) {
          // store time of first click
          exp2_pre_a2.timesOn.push(exp2_pre_a2.clock.getTime());
          // store time clicked until
          exp2_pre_a2.timesOff.push(exp2_pre_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a2.timesOff[exp2_pre_a2.timesOff.length - 1] = exp2_pre_a2.clock.getTime();
        }
        if (!exp2_pre_a2.wasClicked) {
          // end routine when exp2_pre_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a2 is still clicked next frame, it is not a new click
        exp2_pre_a2.wasClicked = true;
      } else {
        // if exp2_pre_a2 is clicked next frame, it is a new click
        exp2_pre_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a2 hasn't started / has finished
      exp2_pre_a2.clock.reset();
      // if exp2_pre_a2 is clicked next frame, it is a new click
      exp2_pre_a2.wasClicked = false;
    }
    
    // *exp2_pre_a1* updates
    if (t >= 0 && exp2_pre_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_a1.tStart = t;  // (not accounting for frame time here)
      exp2_pre_a1.frameNStart = frameN;  // exact frame index
      
      exp2_pre_a1.setAutoDraw(true);
    }
    
    if (exp2_pre_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp2_pre_a1 has been pressed
      if (exp2_pre_a1.isClicked) {
        if (!exp2_pre_a1.wasClicked) {
          // store time of first click
          exp2_pre_a1.timesOn.push(exp2_pre_a1.clock.getTime());
          // store time clicked until
          exp2_pre_a1.timesOff.push(exp2_pre_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp2_pre_a1.timesOff[exp2_pre_a1.timesOff.length - 1] = exp2_pre_a1.clock.getTime();
        }
        if (!exp2_pre_a1.wasClicked) {
          // end routine when exp2_pre_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp2_pre_a1 is still clicked next frame, it is not a new click
        exp2_pre_a1.wasClicked = true;
      } else {
        // if exp2_pre_a1 is clicked next frame, it is a new click
        exp2_pre_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_pre_a1 hasn't started / has finished
      exp2_pre_a1.clock.reset();
      // if exp2_pre_a1 is clicked next frame, it is a new click
      exp2_pre_a1.wasClicked = false;
    }
    
    // *exp2_pre_bg* updates
    if (t >= 0.0 && exp2_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp2_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp2_pre_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp2_preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_pre' ---
    for (const thisComponent of exp2_preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp2_pre.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp2_pre_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('exp2_pre_a4.numClicks', exp2_pre_a4.numClicks);
    psychoJS.experiment.addData('exp2_pre_a4.timesOn', exp2_pre_a4.timesOn);
    psychoJS.experiment.addData('exp2_pre_a4.timesOff', exp2_pre_a4.timesOff);
    psychoJS.experiment.addData('exp2_pre_a3.numClicks', exp2_pre_a3.numClicks);
    psychoJS.experiment.addData('exp2_pre_a3.timesOn', exp2_pre_a3.timesOn);
    psychoJS.experiment.addData('exp2_pre_a3.timesOff', exp2_pre_a3.timesOff);
    psychoJS.experiment.addData('exp2_pre_a2.numClicks', exp2_pre_a2.numClicks);
    psychoJS.experiment.addData('exp2_pre_a2.timesOn', exp2_pre_a2.timesOn);
    psychoJS.experiment.addData('exp2_pre_a2.timesOff', exp2_pre_a2.timesOff);
    psychoJS.experiment.addData('exp2_pre_a1.numClicks', exp2_pre_a1.numClicks);
    psychoJS.experiment.addData('exp2_pre_a1.timesOn', exp2_pre_a1.timesOn);
    psychoJS.experiment.addData('exp2_pre_a1.timesOff', exp2_pre_a1.timesOff);
    // the Routine "exp2_pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_restMaxDurationReached;
var exp2_restMaxDuration;
var exp2_restComponents;
function exp2_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_restClock.reset();
    routineTimer.reset();
    exp2_restMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_rest_np to account for continued clicks & clear times on/off
    exp2_rest_np.reset()
    psychoJS.experiment.addData('exp2_rest.started', globalClock.getTime());
    exp2_restMaxDuration = null
    // keep track of which components have finished
    exp2_restComponents = [];
    exp2_restComponents.push(exp2_rest_np);
    exp2_restComponents.push(exp2_rest_bg);
    
    for (const thisComponent of exp2_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_rest' ---
    // get current time
    t = exp2_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_rest_np* updates
    if (t >= 0 && exp2_rest_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_rest_np.tStart = t;  // (not accounting for frame time here)
      exp2_rest_np.frameNStart = frameN;  // exact frame index
      
      exp2_rest_np.setAutoDraw(true);
    }
    
    if (exp2_rest_np.status === PsychoJS.Status.STARTED) {
      // check whether exp2_rest_np has been pressed
      if (exp2_rest_np.isClicked) {
        if (!exp2_rest_np.wasClicked) {
          // store time of first click
          exp2_rest_np.timesOn.push(exp2_rest_np.clock.getTime());
          // store time clicked until
          exp2_rest_np.timesOff.push(exp2_rest_np.clock.getTime());
        } else {
          // update time clicked until;
          exp2_rest_np.timesOff[exp2_rest_np.timesOff.length - 1] = exp2_rest_np.clock.getTime();
        }
        if (!exp2_rest_np.wasClicked) {
          // end routine when exp2_rest_np is clicked
          continueRoutine = false;
          
        }
        // if exp2_rest_np is still clicked next frame, it is not a new click
        exp2_rest_np.wasClicked = true;
      } else {
        // if exp2_rest_np is clicked next frame, it is a new click
        exp2_rest_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_rest_np hasn't started / has finished
      exp2_rest_np.clock.reset();
      // if exp2_rest_np is clicked next frame, it is a new click
      exp2_rest_np.wasClicked = false;
    }
    
    // *exp2_rest_bg* updates
    if (t >= 0.0 && exp2_rest_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_rest_bg.tStart = t;  // (not accounting for frame time here)
      exp2_rest_bg.frameNStart = frameN;  // exact frame index
      
      exp2_rest_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp2_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_rest' ---
    for (const thisComponent of exp2_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp2_rest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_rest_np.numClicks', exp2_rest_np.numClicks);
    psychoJS.experiment.addData('exp2_rest_np.timesOn', exp2_rest_np.timesOn);
    psychoJS.experiment.addData('exp2_rest_np.timesOff', exp2_rest_np.timesOff);
    // the Routine "exp2_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_mainMaxDurationReached;
var exp2_mainMaxDuration;
var exp2_mainComponents;
function exp2_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_mainClock.reset();
    routineTimer.reset();
    exp2_mainMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_main_a4 to account for continued clicks & clear times on/off
    exp2_main_a4.reset()
    // reset exp2_main_a3 to account for continued clicks & clear times on/off
    exp2_main_a3.reset()
    // reset exp2_main_a2 to account for continued clicks & clear times on/off
    exp2_main_a2.reset()
    // reset exp2_main_a1 to account for continued clicks & clear times on/off
    exp2_main_a1.reset()
    exp2_main_bg.setImage(exp2_main_stimuli);
    psychoJS.experiment.addData('exp2_main.started', globalClock.getTime());
    exp2_mainMaxDuration = null
    // keep track of which components have finished
    exp2_mainComponents = [];
    exp2_mainComponents.push(exp2_main_a4);
    exp2_mainComponents.push(exp2_main_a3);
    exp2_mainComponents.push(exp2_main_a2);
    exp2_mainComponents.push(exp2_main_a1);
    exp2_mainComponents.push(exp2_main_bg);
    
    for (const thisComponent of exp2_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_main' ---
    // get current time
    t = exp2_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp2_main_a4* updates
    if (t >= 0 && exp2_main_a4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a4.tStart = t;  // (not accounting for frame time here)
      exp2_main_a4.frameNStart = frameN;  // exact frame index
      
      exp2_main_a4.setAutoDraw(true);
    }
    
    if (exp2_main_a4.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a4 has been pressed
      if (exp2_main_a4.isClicked) {
        if (!exp2_main_a4.wasClicked) {
          // store time of first click
          exp2_main_a4.timesOn.push(exp2_main_a4.clock.getTime());
          // store time clicked until
          exp2_main_a4.timesOff.push(exp2_main_a4.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a4.timesOff[exp2_main_a4.timesOff.length - 1] = exp2_main_a4.clock.getTime();
        }
        if (!exp2_main_a4.wasClicked) {
          // end routine when exp2_main_a4 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a4 is still clicked next frame, it is not a new click
        exp2_main_a4.wasClicked = true;
      } else {
        // if exp2_main_a4 is clicked next frame, it is a new click
        exp2_main_a4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a4 hasn't started / has finished
      exp2_main_a4.clock.reset();
      // if exp2_main_a4 is clicked next frame, it is a new click
      exp2_main_a4.wasClicked = false;
    }
    
    // *exp2_main_a3* updates
    if (t >= 0 && exp2_main_a3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a3.tStart = t;  // (not accounting for frame time here)
      exp2_main_a3.frameNStart = frameN;  // exact frame index
      
      exp2_main_a3.setAutoDraw(true);
    }
    
    if (exp2_main_a3.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a3 has been pressed
      if (exp2_main_a3.isClicked) {
        if (!exp2_main_a3.wasClicked) {
          // store time of first click
          exp2_main_a3.timesOn.push(exp2_main_a3.clock.getTime());
          // store time clicked until
          exp2_main_a3.timesOff.push(exp2_main_a3.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a3.timesOff[exp2_main_a3.timesOff.length - 1] = exp2_main_a3.clock.getTime();
        }
        if (!exp2_main_a3.wasClicked) {
          // end routine when exp2_main_a3 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a3 is still clicked next frame, it is not a new click
        exp2_main_a3.wasClicked = true;
      } else {
        // if exp2_main_a3 is clicked next frame, it is a new click
        exp2_main_a3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a3 hasn't started / has finished
      exp2_main_a3.clock.reset();
      // if exp2_main_a3 is clicked next frame, it is a new click
      exp2_main_a3.wasClicked = false;
    }
    
    // *exp2_main_a2* updates
    if (t >= 0 && exp2_main_a2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a2.tStart = t;  // (not accounting for frame time here)
      exp2_main_a2.frameNStart = frameN;  // exact frame index
      
      exp2_main_a2.setAutoDraw(true);
    }
    
    if (exp2_main_a2.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a2 has been pressed
      if (exp2_main_a2.isClicked) {
        if (!exp2_main_a2.wasClicked) {
          // store time of first click
          exp2_main_a2.timesOn.push(exp2_main_a2.clock.getTime());
          // store time clicked until
          exp2_main_a2.timesOff.push(exp2_main_a2.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a2.timesOff[exp2_main_a2.timesOff.length - 1] = exp2_main_a2.clock.getTime();
        }
        if (!exp2_main_a2.wasClicked) {
          // end routine when exp2_main_a2 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a2 is still clicked next frame, it is not a new click
        exp2_main_a2.wasClicked = true;
      } else {
        // if exp2_main_a2 is clicked next frame, it is a new click
        exp2_main_a2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a2 hasn't started / has finished
      exp2_main_a2.clock.reset();
      // if exp2_main_a2 is clicked next frame, it is a new click
      exp2_main_a2.wasClicked = false;
    }
    
    // *exp2_main_a1* updates
    if (t >= 0 && exp2_main_a1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_a1.tStart = t;  // (not accounting for frame time here)
      exp2_main_a1.frameNStart = frameN;  // exact frame index
      
      exp2_main_a1.setAutoDraw(true);
    }
    
    if (exp2_main_a1.status === PsychoJS.Status.STARTED) {
      // check whether exp2_main_a1 has been pressed
      if (exp2_main_a1.isClicked) {
        if (!exp2_main_a1.wasClicked) {
          // store time of first click
          exp2_main_a1.timesOn.push(exp2_main_a1.clock.getTime());
          // store time clicked until
          exp2_main_a1.timesOff.push(exp2_main_a1.clock.getTime());
        } else {
          // update time clicked until;
          exp2_main_a1.timesOff[exp2_main_a1.timesOff.length - 1] = exp2_main_a1.clock.getTime();
        }
        if (!exp2_main_a1.wasClicked) {
          // end routine when exp2_main_a1 is clicked
          continueRoutine = false;
          
        }
        // if exp2_main_a1 is still clicked next frame, it is not a new click
        exp2_main_a1.wasClicked = true;
      } else {
        // if exp2_main_a1 is clicked next frame, it is a new click
        exp2_main_a1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_main_a1 hasn't started / has finished
      exp2_main_a1.clock.reset();
      // if exp2_main_a1 is clicked next frame, it is a new click
      exp2_main_a1.wasClicked = false;
    }
    
    // *exp2_main_bg* updates
    if (t >= 0.0 && exp2_main_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_main_bg.tStart = t;  // (not accounting for frame time here)
      exp2_main_bg.frameNStart = frameN;  // exact frame index
      
      exp2_main_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp2_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_main' ---
    for (const thisComponent of exp2_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp2_main.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp2_main_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('exp2_main_a4.numClicks', exp2_main_a4.numClicks);
    psychoJS.experiment.addData('exp2_main_a4.timesOn', exp2_main_a4.timesOn);
    psychoJS.experiment.addData('exp2_main_a4.timesOff', exp2_main_a4.timesOff);
    psychoJS.experiment.addData('exp2_main_a3.numClicks', exp2_main_a3.numClicks);
    psychoJS.experiment.addData('exp2_main_a3.timesOn', exp2_main_a3.timesOn);
    psychoJS.experiment.addData('exp2_main_a3.timesOff', exp2_main_a3.timesOff);
    psychoJS.experiment.addData('exp2_main_a2.numClicks', exp2_main_a2.numClicks);
    psychoJS.experiment.addData('exp2_main_a2.timesOn', exp2_main_a2.timesOn);
    psychoJS.experiment.addData('exp2_main_a2.timesOff', exp2_main_a2.timesOff);
    psychoJS.experiment.addData('exp2_main_a1.numClicks', exp2_main_a1.numClicks);
    psychoJS.experiment.addData('exp2_main_a1.timesOn', exp2_main_a1.timesOn);
    psychoJS.experiment.addData('exp2_main_a1.timesOff', exp2_main_a1.timesOff);
    // the Routine "exp2_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp2_endMaxDurationReached;
var exp2_endMaxDuration;
var exp2_endComponents;
function exp2_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp2_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp2_endClock.reset();
    routineTimer.reset();
    exp2_endMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp2_end_np to account for continued clicks & clear times on/off
    exp2_end_np.reset()
    psychoJS.experiment.addData('exp2_end.started', globalClock.getTime());
    exp2_endMaxDuration = null
    // keep track of which components have finished
    exp2_endComponents = [];
    exp2_endComponents.push(exp2_end_np);
    exp2_endComponents.push(exp2_end_bg);
    
    for (const thisComponent of exp2_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp2_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp2_end' ---
    // get current time
    t = exp2_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp2_end_np* updates
    if (t >= 0 && exp2_end_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_end_np.tStart = t;  // (not accounting for frame time here)
      exp2_end_np.frameNStart = frameN;  // exact frame index
      
      exp2_end_np.setAutoDraw(true);
    }
    
    if (exp2_end_np.status === PsychoJS.Status.STARTED) {
      // check whether exp2_end_np has been pressed
      if (exp2_end_np.isClicked) {
        if (!exp2_end_np.wasClicked) {
          // store time of first click
          exp2_end_np.timesOn.push(exp2_end_np.clock.getTime());
          // store time clicked until
          exp2_end_np.timesOff.push(exp2_end_np.clock.getTime());
        } else {
          // update time clicked until;
          exp2_end_np.timesOff[exp2_end_np.timesOff.length - 1] = exp2_end_np.clock.getTime();
        }
        if (!exp2_end_np.wasClicked) {
          // end routine when exp2_end_np is clicked
          continueRoutine = false;
          
        }
        // if exp2_end_np is still clicked next frame, it is not a new click
        exp2_end_np.wasClicked = true;
      } else {
        // if exp2_end_np is clicked next frame, it is a new click
        exp2_end_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp2_end_np hasn't started / has finished
      exp2_end_np.clock.reset();
      // if exp2_end_np is clicked next frame, it is a new click
      exp2_end_np.wasClicked = false;
    }
    
    // *exp2_end_bg* updates
    if (t >= 0.0 && exp2_end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp2_end_bg.tStart = t;  // (not accounting for frame time here)
      exp2_end_bg.frameNStart = frameN;  // exact frame index
      
      exp2_end_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp2_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp2_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp2_end' ---
    for (const thisComponent of exp2_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp2_end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp2_end_np.numClicks', exp2_end_np.numClicks);
    psychoJS.experiment.addData('exp2_end_np.timesOn', exp2_end_np.timesOn);
    psychoJS.experiment.addData('exp2_end_np.timesOff', exp2_end_np.timesOff);
    // the Routine "exp2_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_introMaxDurationReached;
var exp3_introMaxDuration;
var exp3_introComponents;
function exp3_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_introClock.reset();
    routineTimer.reset();
    exp3_introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp3_intro_np to account for continued clicks & clear times on/off
    exp3_intro_np.reset()
    psychoJS.experiment.addData('exp3_intro.started', globalClock.getTime());
    exp3_introMaxDuration = null
    // keep track of which components have finished
    exp3_introComponents = [];
    exp3_introComponents.push(exp3_intro_np);
    exp3_introComponents.push(exp3_intro_bg);
    
    for (const thisComponent of exp3_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_intro' ---
    // get current time
    t = exp3_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_intro_np* updates
    if (t >= 0 && exp3_intro_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_np.tStart = t;  // (not accounting for frame time here)
      exp3_intro_np.frameNStart = frameN;  // exact frame index
      
      exp3_intro_np.setAutoDraw(true);
    }
    
    if (exp3_intro_np.status === PsychoJS.Status.STARTED) {
      // check whether exp3_intro_np has been pressed
      if (exp3_intro_np.isClicked) {
        if (!exp3_intro_np.wasClicked) {
          // store time of first click
          exp3_intro_np.timesOn.push(exp3_intro_np.clock.getTime());
          // store time clicked until
          exp3_intro_np.timesOff.push(exp3_intro_np.clock.getTime());
        } else {
          // update time clicked until;
          exp3_intro_np.timesOff[exp3_intro_np.timesOff.length - 1] = exp3_intro_np.clock.getTime();
        }
        if (!exp3_intro_np.wasClicked) {
          // end routine when exp3_intro_np is clicked
          continueRoutine = false;
          
        }
        // if exp3_intro_np is still clicked next frame, it is not a new click
        exp3_intro_np.wasClicked = true;
      } else {
        // if exp3_intro_np is clicked next frame, it is a new click
        exp3_intro_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp3_intro_np hasn't started / has finished
      exp3_intro_np.clock.reset();
      // if exp3_intro_np is clicked next frame, it is a new click
      exp3_intro_np.wasClicked = false;
    }
    
    // *exp3_intro_bg* updates
    if (t >= 0.0 && exp3_intro_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_intro_bg.tStart = t;  // (not accounting for frame time here)
      exp3_intro_bg.frameNStart = frameN;  // exact frame index
      
      exp3_intro_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_intro' ---
    for (const thisComponent of exp3_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp3_intro_np.numClicks', exp3_intro_np.numClicks);
    psychoJS.experiment.addData('exp3_intro_np.timesOn', exp3_intro_np.timesOn);
    psychoJS.experiment.addData('exp3_intro_np.timesOff', exp3_intro_np.timesOff);
    // the Routine "exp3_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_preMaxDurationReached;
var exp3_preMaxDuration;
var exp3_preComponents;
function exp3_preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_preClock.reset();
    routineTimer.reset();
    exp3_preMaxDurationReached = false;
    // update component parameters for each repeat
    exp3_pre_bg.setImage(exp3_pre_stimuli);
    // reset next_page to account for continued clicks & clear times on/off
    next_page.reset()
    psychoJS.experiment.addData('exp3_pre.started', globalClock.getTime());
    exp3_preMaxDuration = null
    // keep track of which components have finished
    exp3_preComponents = [];
    exp3_preComponents.push(exp3_pre_bg);
    exp3_preComponents.push(next_page);
    
    for (const thisComponent of exp3_preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_pre' ---
    // get current time
    t = exp3_preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp3_pre_bg* updates
    if (t >= 0.0 && exp3_pre_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_pre_bg.tStart = t;  // (not accounting for frame time here)
      exp3_pre_bg.frameNStart = frameN;  // exact frame index
      
      exp3_pre_bg.setAutoDraw(true);
    }
    
    
    // *next_page* updates
    if (t >= 60 && next_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_page.tStart = t;  // (not accounting for frame time here)
      next_page.frameNStart = frameN;  // exact frame index
      
      next_page.setAutoDraw(true);
    }
    
    if (next_page.status === PsychoJS.Status.STARTED) {
      // check whether next_page has been pressed
      if (next_page.isClicked) {
        if (!next_page.wasClicked) {
          // store time of first click
          next_page.timesOn.push(next_page.clock.getTime());
          // store time clicked until
          next_page.timesOff.push(next_page.clock.getTime());
        } else {
          // update time clicked until;
          next_page.timesOff[next_page.timesOff.length - 1] = next_page.clock.getTime();
        }
        if (!next_page.wasClicked) {
          // end routine when next_page is clicked
          continueRoutine = false;
          
        }
        // if next_page is still clicked next frame, it is not a new click
        next_page.wasClicked = true;
      } else {
        // if next_page is clicked next frame, it is a new click
        next_page.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_page hasn't started / has finished
      next_page.clock.reset();
      // if next_page is clicked next frame, it is a new click
      next_page.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_pre' ---
    for (const thisComponent of exp3_preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp3_pre_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('exp3_pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('next_page.numClicks', next_page.numClicks);
    psychoJS.experiment.addData('next_page.timesOn', next_page.timesOn);
    psychoJS.experiment.addData('next_page.timesOff', next_page.timesOff);
    // the Routine "exp3_pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_restMaxDurationReached;
var exp3_restMaxDuration;
var exp3_restComponents;
function exp3_restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_restClock.reset();
    routineTimer.reset();
    exp3_restMaxDurationReached = false;
    // update component parameters for each repeat
    // reset exp3_rest_np to account for continued clicks & clear times on/off
    exp3_rest_np.reset()
    psychoJS.experiment.addData('exp3_rest.started', globalClock.getTime());
    exp3_restMaxDuration = null
    // keep track of which components have finished
    exp3_restComponents = [];
    exp3_restComponents.push(exp3_rest_np);
    exp3_restComponents.push(exp3_rest_bg);
    
    for (const thisComponent of exp3_restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_rest' ---
    // get current time
    t = exp3_restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_rest_np* updates
    if (t >= 0 && exp3_rest_np.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_rest_np.tStart = t;  // (not accounting for frame time here)
      exp3_rest_np.frameNStart = frameN;  // exact frame index
      
      exp3_rest_np.setAutoDraw(true);
    }
    
    if (exp3_rest_np.status === PsychoJS.Status.STARTED) {
      // check whether exp3_rest_np has been pressed
      if (exp3_rest_np.isClicked) {
        if (!exp3_rest_np.wasClicked) {
          // store time of first click
          exp3_rest_np.timesOn.push(exp3_rest_np.clock.getTime());
          // store time clicked until
          exp3_rest_np.timesOff.push(exp3_rest_np.clock.getTime());
        } else {
          // update time clicked until;
          exp3_rest_np.timesOff[exp3_rest_np.timesOff.length - 1] = exp3_rest_np.clock.getTime();
        }
        if (!exp3_rest_np.wasClicked) {
          // end routine when exp3_rest_np is clicked
          continueRoutine = false;
          
        }
        // if exp3_rest_np is still clicked next frame, it is not a new click
        exp3_rest_np.wasClicked = true;
      } else {
        // if exp3_rest_np is clicked next frame, it is a new click
        exp3_rest_np.wasClicked = false;
      }
    } else {
      // keep clock at 0 if exp3_rest_np hasn't started / has finished
      exp3_rest_np.clock.reset();
      // if exp3_rest_np is clicked next frame, it is a new click
      exp3_rest_np.wasClicked = false;
    }
    
    // *exp3_rest_bg* updates
    if (t >= 0.0 && exp3_rest_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_rest_bg.tStart = t;  // (not accounting for frame time here)
      exp3_rest_bg.frameNStart = frameN;  // exact frame index
      
      exp3_rest_bg.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_rest' ---
    for (const thisComponent of exp3_restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_rest.stopped', globalClock.getTime());
    psychoJS.experiment.addData('exp3_rest_np.numClicks', exp3_rest_np.numClicks);
    psychoJS.experiment.addData('exp3_rest_np.timesOn', exp3_rest_np.timesOn);
    psychoJS.experiment.addData('exp3_rest_np.timesOff', exp3_rest_np.timesOff);
    // the Routine "exp3_rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_mainMaxDurationReached;
var exp3_mainMaxDuration;
var exp3_mainComponents;
function exp3_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_main' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_mainClock.reset();
    routineTimer.reset();
    exp3_mainMaxDurationReached = false;
    // update component parameters for each repeat
    exp3_main_bg.setImage(exp3_main_stimuli);
    // reset next_page_2 to account for continued clicks & clear times on/off
    next_page_2.reset()
    psychoJS.experiment.addData('exp3_main.started', globalClock.getTime());
    exp3_mainMaxDuration = null
    // keep track of which components have finished
    exp3_mainComponents = [];
    exp3_mainComponents.push(exp3_main_bg);
    exp3_mainComponents.push(next_page_2);
    
    for (const thisComponent of exp3_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_mainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_main' ---
    // get current time
    t = exp3_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (mic.status != STARTED) {
        await mic.start();
    }
    
    // *exp3_main_bg* updates
    if (t >= 0.0 && exp3_main_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_main_bg.tStart = t;  // (not accounting for frame time here)
      exp3_main_bg.frameNStart = frameN;  // exact frame index
      
      exp3_main_bg.setAutoDraw(true);
    }
    
    
    // *next_page_2* updates
    if (t >= 60 && next_page_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_page_2.tStart = t;  // (not accounting for frame time here)
      next_page_2.frameNStart = frameN;  // exact frame index
      
      next_page_2.setAutoDraw(true);
    }
    
    if (next_page_2.status === PsychoJS.Status.STARTED) {
      // check whether next_page_2 has been pressed
      if (next_page_2.isClicked) {
        if (!next_page_2.wasClicked) {
          // store time of first click
          next_page_2.timesOn.push(next_page_2.clock.getTime());
          // store time clicked until
          next_page_2.timesOff.push(next_page_2.clock.getTime());
        } else {
          // update time clicked until;
          next_page_2.timesOff[next_page_2.timesOff.length - 1] = next_page_2.clock.getTime();
        }
        if (!next_page_2.wasClicked) {
          // end routine when next_page_2 is clicked
          continueRoutine = false;
          
        }
        // if next_page_2 is still clicked next frame, it is not a new click
        next_page_2.wasClicked = true;
      } else {
        // if next_page_2 is clicked next frame, it is a new click
        next_page_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if next_page_2 hasn't started / has finished
      next_page_2.clock.reset();
      // if next_page_2 is clicked next frame, it is a new click
      next_page_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_mainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_main' ---
    for (const thisComponent of exp3_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_main.stopped', globalClock.getTime());
    // stop the microphone (make the audio data ready for upload)
    await mic.stop();
    
    // construct a filename for this recording
    thisFilename = 'recording_' +
                    expName + "_" +
                    expInfo["participant"] + "_" +
                    "item_" + String(exp3_main_stimuli) +
                    '_' + String(Date.now()); // add epoch timestamp so no overwriting
    
    // get the recording
    mic.lastClip = await mic.getRecording({
      tag: thisFilename,
      flush: false
    });
    
    psychoJS.experiment.addData('mic.clip', thisFilename + ".wav");
    // start the asynchronous upload to the server
    mic.lastClip.upload();
    psychoJS.experiment.addData('next_page_2.numClicks', next_page_2.numClicks);
    psychoJS.experiment.addData('next_page_2.timesOn', next_page_2.timesOn);
    psychoJS.experiment.addData('next_page_2.timesOff', next_page_2.timesOff);
    // the Routine "exp3_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp3_endMaxDurationReached;
var exp3_endMaxDuration;
var exp3_endComponents;
function exp3_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp3_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    exp3_endClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    exp3_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp3_end.started', globalClock.getTime());
    exp3_endMaxDuration = null
    // keep track of which components have finished
    exp3_endComponents = [];
    exp3_endComponents.push(exp3_end_bg);
    
    for (const thisComponent of exp3_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp3_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp3_end' ---
    // get current time
    t = exp3_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp3_end_bg* updates
    if (t >= 0.0 && exp3_end_bg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp3_end_bg.tStart = t;  // (not accounting for frame time here)
      exp3_end_bg.frameNStart = frameN;  // exact frame index
      
      exp3_end_bg.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (exp3_end_bg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exp3_end_bg.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp3_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp3_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp3_end' ---
    for (const thisComponent of exp3_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp3_end.stopped', globalClock.getTime());
    if (exp3_endMaxDurationReached) {
        exp3_endClock.add(exp3_endMaxDuration);
    } else {
        exp3_endClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
