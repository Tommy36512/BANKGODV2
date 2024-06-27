const questions = [
    {
        question: "If engine anti-ice is planned to be used during takeoff, until reaching which altitude should it be considered to be ON?",
        answers: ["MSA", "ACC", "EOACC", "THRRED"],
        correct: 3
    },
    {
        question: "A 'contaminated runway' describes a surface where a certain percentage of the runway is covered by what depth of contaminant?",
        answers: ["More than 1 mm", "More than 3 mm", "More than 7 mm", "More than 5 mm"],
        correct: 1
    },
   {
        question: "Who is CM1 and CM2 out of Frankie and Mohammed?",
        answers: ["Frankie", "Relax its Mohammed", "Neither", "Mitch"],
        correct: 1
   },
    {
        question: "After a landing performance calculation. Flysmart generates amber figures in the computations area. What does this mean?",
        answers: ["Single engine performance is not available", "Autoland not available", "Factored landing distance exceeds available landing distance", "Calculated stop point within 300 m of runway end"],
        correct: 2
    },
    {
        question: "Which of the following is NOT an SOP while taking off on a contaminated runway?",
        answers: ["TOGA thrust to be used", "CM1 to be PF", "Normal takeoff technique to be used", "CONF 1 +F must be used for takeoff"],
        correct: 3
    },
    {
        question: "On an EFB PERF page, where can the ISA value be located (to calculate TREF for example)?",
        answers: ["Must be calculated manually", "Next to OAT", "Next to computed flex temperature", "MORE <F10>"],
        correct: 1
    },
    {
        question: "What is the screen height for a wet runway?",
        answers: ["10 ft", "30 ft", "15 ft", "25 ft"],
        correct: 2
    },
    {
        question: "What is the screen height for a dry runway?",
        answers: ["10 ft", "30 ft", "15 ft", "35 ft"],
        correct: 3
    },
    {
        question: "In the event of an LMC of 200 kg, what is the appropriate response?",
        answers: ["Subtract one degree from flex", "No correction available. Recalculate speeds and flex.", "Initial calculations cover this change. No action required.", "Perform a rolling takeoff"],
        correct: 0
    },
    {
        question: "In the event of a last-minute decision to use engine anti-ice, what correction must be applied?",
        answers: ["No correction available. Recalculate speeds and flex.", "Subtract five degrees from flex", "Initial calculations cover this change. No action required.", "Increase thrust reduction altitude by 500 ft"],
        correct: 1
    },
    {
        question: "In the event of a QNH reduction by 1 hPa on taxi-out, what correction must be applied?",
        answers: ["Increase thrust reduction altitude by 500 ft", "Initial calculations cover this change. No action required.", "Subtract one degree from flex", "No correction available. Recalculate speeds and flex."],
        correct: 2
    },
    {
        question: "In the event of a QNH reduction by 2 hPa on taxi-out, what correction must be applied?",
        answers: ["No correction available. Recalculate speeds and flex.", "Initial calculations cover this change. No action required.", "Subtract one degree from flex", "Subtract two degrees from flex"],
        correct: 3
    },
    {
        question: "In the event of a QNH reduction by 3 hPa on taxi-out, what correction must be applied?",
        answers: ["Subtract two degrees from flex", "Initial calculations cover this change. No action required.", "No correction available. Recalculate speeds and flex.", "Subtract one degree from flex"],
        correct: 0
    },
    {
        question: "In the event of a last minute decision to use engine bleed to supply packs, what correction must be applied?",
        answers: ["Subtract two degrees from flex", "No correction available. Recalculate speeds and flex.", "Initial calculations cover this change. No action required.", "Subtract one degree from flex"],
        correct: 1
    },
    {
        question: "Where is the correct place to find RWY COND EFB entry for takeoff?",
        answers: ["QRH", "OM-B", "OM-A", "EFB MORE app"],
        correct: 3
    },
    {
        question: "Where is the correct place to find RWY COND EFB entry in flight for landing?",
        answers: ["OM-A", "QRH", "EFB MORE app", "OM-B"],
        correct: 1
    },
    {
        question: "Under which conditions must engine anti-ice be used?",
        answers: ["With rain falling", "OAT 0°C or below and visible moisture", "OAT 5°C or below and visible moisture", "OAT 10°C or below and visible moisture"],
        correct: 3
    },
    {
        question: "What is considered to be a 'forward' CG at takeoff?",
        answers: ["less than 27%", "less than or equal to 27%", "less than 30%", "less than or equal to 30%"],
        correct: 0
    },
    {
        question: "What is considered to be a 'standard' CG at takeoff?",
        answers: ["More than 27%", "More than or equal to 27%", "More than 30%", "More than or equal to 30%"],
        correct: 1
    },
    {
        question: "Which of these statements is NOT true regarding a CONF 1 +F takeoff instead of other configurations?",
        answers: ["Takeoff run is longer", "It produces the best climb gradient", "Climb gradient is reduced"],
        correct: 2
    },
    {
        question: "OPT CONF selection for takeoff ensures what?",
        answers: ["Always produces CONF 3 takeoff", "The best MTOW is calculated", "That the highest V1 is always used"],
        correct: 1
    },
    {
        question: "When is a rolling takeoff not permitted due to performance?",
        answers: ["A TOGA takeoff", "A TOGA takeoff with a RWY or OBS limit code", "When RWY or OBS is the performance limit code", "Flex falls below TREF"],
        correct: 1
    },
    {
        question: "If departing from an intersection with a longer TORA than planned, what is required?",
        answers: ["Recalculation of takeoff performance", "TOGA takeoff performed", "No action required", "Derate removed"],
        correct: 2
    },
    {
        question: "If following an EOSID, what obstacle clearance is guaranteed?",
        answers: ["None", "Above 1,500 ft, a radius of 30 NM is surveyed for limiting obstacles", "Above 1,000 ft, a radius of 20 NM is surveyed for limiting obstacles", "As per MSA only"],
        correct: 1
    },
    {
        question: "How can the maximum acceleration altitude be found on the EFB TO PERF page?",
        answers: ["By tapping on the flex temperature", "Must be manually calculated using FCOM", "Adding 4,000 ft to acceleration altitudes calculated", "MORE <F10>"],
        correct: 3
    },
    {
        question: "On the EFB, how can MEL items be added to assure performance requirements are met?",
        answers: ["ACFT STS <FS>", "Must be manually calculated using FCOM", "By tapping on the flex temperature", "MORE <F10>"],
        correct: 0
    },
    {
        question: "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -16°C?",
        answers: ["15 kts", "10 kts", "38 kts", "29 kts"],
        correct: 3
    },
    {
        question: "For an in-flight landing calculation, what is the maximum crosswind with 5 mm of water?",
        answers: ["20 kts", "10 kts", "15 kts", "29 kts"],
        correct: 0
    },
    {
        question: "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -13°C?",
        answers: ["29 kts", "25 kts", "38 kts", "10 kts"],
        correct: 1
    },
    {
        question: "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 'Wet' runway?",
        answers: ["6-Dry", "4-Good to Medium", "5-Good", "3-Medium"],
        correct: 2
    },
    {
        question: "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 5 mm of water on the runway?",
        answers: ["6-Dry", "2-Medium to Poor", "5-Good", "3-Medium"],
        correct: 3
    },
    {
        question: "On the EFB, how can the GA gradient be modified to ensure compliance?",
        answers: ["MODIFY RWY", "ACFT STS <FS>", "MORE <F10>", "Adding Vpilot"],
        correct: 0
    },
    {
        question: "If using Reverse Idle, what is the correct choice in the EFB LOG PERF?",
        answers: ["Yes", "No", "Properties"],
        correct: 1
    },
    {
        question: "In EFB LOG PERF, how do we correctly adjust for a NOTAMed shortening of a runway?",
        answers: ["Adding Vpilot", "ACFT STS <FS>", "MORE <F10>", "FUNCTIONS>MODIFY RWY"],
        correct: 3
    },
    {
        question: "What are the standard second and final segment gross climb gradients on takeoff?",
        answers: ["2.4%/4.8%", "2.4%/1.2%", "1%/2.2%"],
        correct: 1
    },
    {
        question: "What is the correct runway condition in EFB PERF for takeoff if the runway is damp?",
        answers: ["Dry", "Wet", "Neither dry nor wet"],
        correct: 2
    },
    {
        question: "What takeoff performance limit codes indicate performance limiting takeoff when using TOGA thrust?",
        answers: ["RWY and OBS", "RWY only", "OBS only", "RWY, OBS, and VMC"],
        correct: 1
    },
    {
        question: "Required landing distance figures include what factors for a 'dry'/'wet' runway?",
        answers: ["1.25/1.5", "1.5/2.0", "1.67/1.92"],
        correct: 2
    },
    {
        question: "If a runway is wet and NOTAMed 'slippery when wet', what is the correct EFB TO PERF input for RWY COND?",
        answers: ["WATERW", "ICY", "WET", "DRY"],
        correct: 0
    },
    {
        question: "If below 10°C and 'wet' runway only, is anti-ice legally required for take-off?",
        answers: ["Yes", "No", "Properties"],
        correct: 1
    },
    {
        question: "How many 'negligible' COL items can be carried without applying a performance penalty?",
        answers: ["3", "2", "1", "4"],
        correct: 0
    },
    {
        question: "What is Vpilot?",
        answers: ["Added margin for manual landing", "Pilot added adjustment to APPR COR", "Properties"],
        correct: 1
    },
    {
        question: "At landing, what is included in EFB calculations but NOT in QRH calculations?",
        answers: ["A 1.67 factor on landing distance", "A 1.15 factor on landing distance", "A 1.3 factor on landing distance"],
        correct: 1
    },
    {
        question: "What is considered to be a 'standard' CG at landing?",
        answers: ["More than or equal to 27%", "More than 27%", "More than 30%", "More than or equal to 30%"],
        correct: 0
    },
    {
        question: "What is considered to be a 'forward' CG at landing?",
        answers: ["less than or equal to 30%", "less than or equal to 27%", "less than 30%", "less than 27%"],
        correct: 3
    },
    {
        question: "What is the standard operating procedure for the EOSID stop altitude?",
        answers: ["MSA", "MHA", "No procedure specified", "SID stop altitude"],
        correct: 2
    },
    {
        question: "What is an indicator that 'stop margin' figures have additional factors added?",
        answers: ["A high flex figure", "TOGA takeoff", "If all V speeds are the same"],
        correct: 0
    },
    {
        question: "Where is the correct place to find RWY COND EFB entry at landing dispatch?",
        answers: ["EFB MORE app", "OM-A", "QRH", "OM-B"],
        correct: 0
    },
    {
        question: "Which of these is not an appropriate wind entry for a METAR reading VRB03KT?",
        answers: ["T03", "TL03", "H03", "0/0"],
        correct: 2
    },
    {
        question: "What is the TREF value for an Airbus A320-214?",
        answers: ["ISA+29", "ISA+15", "ISA", "ISA+25"],
        correct: 0
    },
    {
        question: "A 'contaminated runway' describes a surface where a certain depth of contaminant is covering what percentage of runway area?",
        answers: ["More than 25%", "More than 50%", "25% or more", "50% or more"],
        correct: 0
    },
    {
        question: "Which is true regarding the EMERGENCY pressure selector?",
        answers: ["It delivers 100% oxygen to the mask when pushed", "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the N position", "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the 100% position", "Pressing the knob generates a permanent overpressure"],
        correct: 2
    },
    {
        question: "What is the effect of pressing the RESET control slide, after the oxygen mask has been used?",
        answers: ["No effect", "It cuts off the oxygen only", "It cuts off the oxygen and the mask microphone", "It only cuts off the mask microphone"],
        correct: 2
    },
    {
        question: "Under normal operations, maximum reverse should not be used below what speed?",
        answers: ["50 kt", "60 kt", "70 kt", "75 kt"],
        correct: 2
    },
    {
        question: "Which of the following correctly completes this statement? \"The pressurization system includes ...",
        answers: ["... 2 Cabin Pressure Controllers; 1 Outflow Valve with 2 auto motors and 1 manual motor.", "... 2 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 1 manual motor.", "... 3 Cabin Pressure Controllers; 2 Outflow Valves with 2 auto motors and 1 manual motor.", "... 3 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 2 manual motors."],
        correct: 0
    },
    {
        question: "What is the maximum speed for speedbrakes use?",
        answers: ["Mmo/Vmo", ".86/350 kt", "There is no limitation", "250 kt in clean configuration"],
        correct: 2
    },
    {
        question: "When does the lavatory/galley extract fan operate?",
        answers: ["Only in flight", "Only on the ground", "Continuously with electrical power", "Only with galley power applied"],
        correct: 2
    },
    {
        question: "In the event of electrical power supply loss ...",
        answers: ["The engine anti ice valves will open automatically, anti icing is assured", "The engine anti ice valves will close automatically, anti icing is lost", "The engine anti ice valves will be controlled by the wing ANTI ICE controls", "The engine anti ice valves remain in the position they were at"],
        correct: 0
    },
    {
        question: "When is HYD PRESS 3,000 +/- 200 PSI?",
        answers: ["Under Normal Conditions and when the RAT is providing system pressure", "Under Normal Conditions", "No HYD PRESS is required on single engine operation", "No HYD PRESS is required for normal operation"],
        correct: 1
    },
    {
        question: "Maximum tire ground speed is?",
        answers: ["195 kt", "200 kt", "205 kt", "185 kt"],
        correct: 0
    },
    {
        question: "Regarding the A/THR indications on the 5th column of the FMA, which of the following is true?",
        answers: ["A/THR in white - [ARMED (actual thrust = TLA)].", "A/THR in blue - [ARMED (actual thrust = TLA)].", "A/THR in blue - [ACTIVE (actual thrust is limited by TLA)].", "A/THR in white - [ACTIVE (actual thrust is always less than TLA)]."],
        correct: 1
    },
    {
        question: "The aural alerts of the Predictive Windshear System (PWS) ...",
        answers: ["Have priority over TCAS, GPWS and other FWC aural warnings", "Only have priority over TCAS warnings", "Only have priority over GPWS warnings", "Never have priority over TCAS and GPWS aural warnings"],
        correct: 0
    },
    {
        question: "What is the maximum speed for operating the windshield wipers?",
        answers: ["185 kt", "200 kt", "215 kt", "230 kt"],
        correct: 3
    },
    {
        question: "Minimum oil temperature for start is?",
        answers: ["-10°C", "-40°C", "There is no limitation", "in the green on SD page"],
        correct: 1
    },
    {
        question: "What does the NW STRG DISC memo on the E/WD indicate?",
        answers: ["The nose wheel steering has been disconnected by ground personnel", "A failure in the nose wheel steering system has been detected", "There is a discrepancy between the two nose wheel steering hand wheel positions", "The nose wheel steering computer has finished its self-test. Nose wheel steering is now available"],
        correct: 0
    },
    {
        question: "The AC ESS BUS is normally supplied by:",
        answers: ["AC BUS 2", "AC BUS 1", "Emergency Generator", "APU via a static inverter"],
        correct: 1
    },
    {
        question: "The APU has been switched off, but it has not stopped. Which of the following would cause this?",
        answers: ["The APU fuel pump continuing to run.", "The air intake flap failing to close.", "A cooling period (following use of APU bleed).", "A cooling period, which occurs on all APU shutdowns."],
        correct: 2
    },
    {
        question: "What is the normal operating pressure in the hydraulic system?",
        answers: ["500 psi", "1000 psi", "2000 psi", "3000 psi"],
        correct: 3
    },
    {
        question: "What is the maximum runway pressure altitude for takeoff and landing",
        answers: ["10,000 ft", "9200 ft", "Dependent on outside air temperature", "There is no restriction"],
        correct: 1
    },
    {
        question: "What indication occurs during a pushback (including engine start), with the steering selector in the TOWING position?",
        answers: ["A caution NW STRG FAULT will appear on the E/WD.", "A memo NW STRG DISC appears in green until the steering selector is returned to NORMAL.", "A memo NW STRG DISC appears in amber if at least one engine is running.", "STRG is displayed (in amber) on the Wheels S.D."],
        correct: 2
    },
    {
        question: "What is the maximum runway slope?",
        answers: ["+/- 1%", "+ 1%/ -2%", "+\- 2%", "+2%/ -1%"],
        correct: 2
    },
    {
        question: "During your preliminary cockpit preparation you notice that the FLAPS lever is in the ZERO position but the E/WD shows the FLAPS extended. What should you do?",
        answers: ["You must move the FLAPS to the position corresponding to the position shown on the SD", "Nothing. The FLAPS will move to the position selected as soon as all the engines are started", "Switch ON the YELLOW electric HYD pump and recycle the FLAPS lever", "You must check with the maintenance crew before applying hydraulic power"],
        correct: 3
    },
    {
        question: "Navaids are normally autotuned by?",
        answers: ["ADIRU", "RMP", "MCDU", "FMGC"],
        correct: 3
    },
    {
        question: "With the AUDIO SWITCHING knob in the CAPT 3 position:",
        answers: ["The Captain uses his acoustic equipment on ACP 3", "The captain should use the 3rd occupant (observer) headset", "The AUDIO SWITCHING knob must be placed in ALTN position", "The AUDIO SWITCHING knob should be placed in STBY position"],
        correct: 0
    },
    {
        question: "When does the F/CTL page appear on the flight deck during the flight control check?",
        answers: ["Automatically as soon as the nose wheel steering handle is moved", "Automatically as soon as the side stick is moved", "The pilot has to press the F/CTL pb on the ECP", "You can't see the page. The system is inoperative on ground"],
        correct: 1
    },
    {
        question: "In ALTERNATE LAW, how do the indications change at the bottom of the speed scale?",
        answers: ["Alpha protection is replaced by an extended VLS.", "There are no changes: it is possible to stall the aircraft.", "VLS is replaced by VSTALL WARNING.", "Alpha protection is replaced by VSTALL WARNING: it is possible to stall the aircraft."],
        correct: 3
    },
    {
        question: "What is the maximum speed for flight with a cockpit window open?",
        answers: ["200 knots", "230 knots", "Green Dot", "250 knots"],
        correct: 0
    },
    {
        question: "After take-off the A/THR will not become active until...",
        answers: ["The autopilot is engaged", "The thrust levers are moved out of the TOGA or FLEX/MCT detents", "The thrust levers are retarded into the CLIMB detent from TOGA or FLEX/MCT and A/THR is displayed white in the FMA", "The A/THR pb is manually selected ON"],
        correct: 2
    },
    {
        question: "The Emergency Generator will power which busses?",
        answers: ["AC Bus 1 and AC Bus 2", "AC ESS & DC ESS buses", "AC Bus 1 and DC Bus 1", "AC ESS and TR 1"],
        correct: 1
    },
    {
        question: "If both pilots simultaneously deflect their side sticks fully back ...",
        answers: ["No inputs are sent to the flight control computers unless one pilot presses the take over pb on his stick", "The pitch up order is algebraically computed. The total is limited to the signal that would result in the max deflection of a single sidestick", "The pitch up order is 1.5 times higher than with only one stick deflected", "The pitch up order is twice as high as with only one stick deflected"],
        correct: 1
    },
    {
        question: "Which of the following correctly completes this statement? \"Provided not on batteries only, the APU may be started ...",
        answers: ["... at or below 35,000 feet only.", "... at or below 25,000 feet only.", "... at or below 300 kts only", "... throughout the normal flight envelope."],
        correct: 3
    },
    {
        question: "Following a Wing Anti-Ice (WAI) test on the ground, what happens if the WAI switch is left ON?",
        answers: ["The Anti-Ice Valves will close after 10 seconds (on the S.D., the triangles go amber).", "WAI will automatically activate on selection of TOGA power.", "If WAI is subsequently required in flight, it is necessary to select the Anti-Ice Switch OFF then ON again.", "After a 30 second test sequence, the wing anti-Ice valves close."],
        correct: 3
    },
    {
        question: "When is the engine fire extinguishing squib armed?",
        answers: ["When both loops fail within 5 seconds of each other", "When the ENG FIRE pushbutton is pushed and released", "When the ENG FIRE pushbutton is illuminated", "when the agent DISCH light is illuminated"],
        correct: 1
    },
    {
        question: "Which of the following is true about the FADEC system?",
        answers: ["It is continuously powered from the moment the aircraft receives AC power.", "It is a dual channel unit that has its own internal power source", "It is not available until the engine MODE SEL is set to IGN/START.", "It is self-powered above 5% N1."],
        correct: 1
    },
    {
        question: "What is the maximum demonstrated crosswind for landing (including gusts)?",
        answers: ["29 knots", "33 knots", "35 knots", "38 knots"],
        correct: 3
    },
    {
        question: "The FIRE light on the pedestal illuminates, what does this indicate?",
        answers: ["The FIRE Light, when illuminated, identifies the engine to be shut down because of fire.", "The FIRE Light, when illuminated, indicates a faulty loop and maintenance action is required.", "The FIRE Light, when illuminated, indicates empty fire bottles.", "The FIRE Light, when illuminated, indicates to the crew they forgot the fire test prior to departure."],
        correct: 0
    },
    {
        question: "What is the certified maximum number of passenger seats for an A320?",
        answers: ["189", "180", "144", "215"],
        correct: 1
    },
    {
        question: "What happens to the cabin lights in the event of excessive cabin altitude?",
        answers: ["The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the switches are in the AUTO position", "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the EMER EXIT switch is ARMED", "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the landing gear is down", "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically regardless of the position of the switches"],
        correct: 3
    },
    {
        question: "What are the thrust settings you can take off with?",
        answers: ["Any manual setting", "FLEX or MCT", "CLIMB or TOGA", "FLEX or TOGA"],
        correct: 3
    },
    {
        question: "Following an overheat and shut down of a hydraulic pump, how long will the FAULT light on the overhead panel remain illuminated?",
        answers: ["It will extinguish when the fluid has cooled to normal temperature.", "It will remain illuminated until maintenance action has been taken.", "It will extinguish when the switch is placed to OFF.", "It is inhibited with engines running."],
        correct: 0
    },
    {
        question: "What information is given at the top right of the Nav Display in the ARC mode?",
        answers: ["Raw Data from a tuned VOR.", "Computed data concerning the TO Waypoint.", "Range marks for the inner circle.", "Track and Groundspeed."],
        correct: 1
    },
    {
        question: "What happens if the BUS TIE pb is set to AUTO position?",
        answers: ["Both bus tie contactors open", "It has no effect on the AC electrical system", "The bus tie contactors (BTCs) automatically open or close to maintain power supply to both AC BUS 1 and 2", "AC BUS 1 and 2 will work in parallel with both generators as suppliers"],
        correct: 2
    },
    {
        question: "On the Speed Tape on the PFD, what does the \"F\" speed represent at take-off?",
        answers: ["Minimum speed to retract flaps from FLAP 3 to FLAP 1.", "Minimum speed to retract flaps from FLAP FULL to FLAP 3.", "Minimum speed for present flap setting.", "Maximum speed for selecting one more stage of flaps."],
        correct: 0
    },
    {
        question: "The FLEX temperature must not be lower than the actual OAT.",
        answers: ["True", "False", "Must be higher than Tmax and TFLEXmax", "Must be higher than TFLEXmax"],
        correct: 0
    },
    {
        question: "The engine ANTI ICE system ...",
        answers: ["Operates only in flight and is fully automatic in case of icing conditions", "Cannot be operated on ground to prevent damaging the slats", "When selected ON, causes idle N1 (or idle EPR) to be reduced", "Is controlled manually by the pilot through the ENG 1 and ENG 2 ANTI ICE pushbuttons"],
        correct: 3
    },
    {
        question: "In what case are the batteries connected to the DC BAT BUS?",
        answers: ["On the ground with loss of AC BUS 1 and 2 when speed is above 140 kt", "On the ground with loss of AC BUS 1 and 2 when speed is below 100 kt", "Whenever the BAT switches are set to AUTO", "When battery voltage is above 27.5 V"],
        correct: 1
    },
    {
        question: "When is selection of reverse thrust in flight allowed?",
        answers: ["It is permitted below WX minima on WET RWY", "It is prohibited", "It is recommended on short runways", "It is allowed above Vmca"],
        correct: 1
    },
    {
        question: "What will be the result if, after selecting FLAPS 2 in flight, asymmetric flap travel occurs?",
        answers: ["The flaps and slats will be locked in position until maintenance action.", "The flaps will be locked in position by the Wing Tip Brake.", "The flaps will run to the selected position, and then be locked by the Wing Tip Brake.", "The Pressure Off Brakes will be applied to prevent further flap movement."],
        correct: 1
    },
    {
        question: "What are the pitch and roll limits in Normal Law Configuration 0?",
        answers: ["Pitch: +30° (+25° at low speed), -15°, Roll: 67°.", "Pitch: +30° (+25° at low speed), -10°, Roll: 67°.", "Pitch: +25° (+20° at low speed), -15°, Roll: 67°.", "Pitch: +30°, Roll: 45°."],
        correct: 0
    },
    {
        question: "With the aircraft on the ground, which of the following is true with regard to the gear lever?",
        answers: ["It can be selected up but retraction is inhibited by the shock absorber being compressed.", "It cannot be moved due to an interlock with shock absorber compression.", "It can be selected up by operating the override trigger.", "It cannot be moved if the Green hydraulic system is pressurized."],
        correct: 1
    },
    {
        question: "What is the effect of selecting the GEN 1 LINE switch to OFF on the EMER ELEC PWR panel?",
        answers: ["Fuel pump operation is transferred to AC ESS BUS.", "GEN 1 is fed directly onto the AC ESS BUS.", "GEN 1 is de-energized.", "GEN 1 line contactor opens."],
        correct: 3
    },
    {
        question: "The STROBE lights selector is set to AUTO. In this position when do they stop flashing?",
        answers: ["When the aircraft touches down", "When the first reverser is opened", "When the landing lights are switched off", "When the last engine has been shut down"],
        correct: 0
    },
    {
        question: "What is maximum altitude that the landing gear may be extended?",
        answers: ["10,000 ft", "25,000 ft", "At aircraft maximum operating altitude.", "2,500 ft"],
        correct: 1
    },
    {
        question: "What are the maximum acceleration (G) limits?",
        answers: ["Slats extended and flaps retracted, 0 g to +2 g", "Slats and flaps extended, 0 g to +2.5 g", "Clean -1 g to +2.5 g, flaps extended -1 g to +2 g", "Clean -1 g to +2.5 g, slats extended -1 g to +2.5 g"],
        correct: 0
    },
    {
        question: "When the gear is retracted, which exterior lights extinguish automatically?",
        answers: ["NOSE and RWY TURN OFF", "RWY TURN OFF and WING", "NOSE and LAND", "LOGO and LAND"],
        correct: 0
    },
    {
        question: "You are performing a takeoff with the thrust levers in the FLEX position. Which of the following statements is true?",
        answers: ["A/THR is now active", "A/THR is now armed", "A/THR is off until the A/THR pb is pressed", "A/THR is now in yellow"],
        correct: 1
    },
    {
        question: "When on an intercept heading, to join an ILS localizer, the Flight Path Vector (FPV) will be lined up with the ...",
        answers: ["... glideslope demand.", "... ILS inbound course.", "... actual aircraft heading.", "... actual aircraft track."],
        correct: 3
    },
    {
        question: "In case of RMP1 failure ...",
        answers: ["RMP1 no longer controls the selected receiver and should be switched OFF", "RMP1 no longer controls the selected receiver and should be switched OFF, tune VHF1 through another RMP", "The frequency display will turn amber and the green VHF (or HF) lights will remain illuminated", "RMP3 can be used provided it is not connected to ACARS"],
        correct: 1
    },
    {
        question: "What is maximum operating altitude with slats and/or flaps extended?",
        answers: ["No restrictions apply.", "10,000 ft.", "15,000 ft.", "20,000 ft."],
        correct: 3
    },
    {
        question: "What does the left (captain's) ND show when selected to ROSE ILS?",
        answers: ["ILS receiver No. 1 or No. 2 signals, as selected.", "ILS receiver No. 1 signals only.", "ILS receiver No. 2 signals only.", "ILS receiver No. 2 signals and the map."],
        correct: 2
    },
    {
        question: "What does a red UNLK light indicate on the Landing Gear Indicator Panel?",
        answers: ["LGCIU 1 and 2 failure.", "Associated gear door is not locked closed.", "Associated gear is in transit.", "Associated gear is not locked in selected position."],
        correct: 3
    },
    {
        question: "You are about to perform a takeoff. You have not inserted a FLEX temperature. Can you still take-off?",
        answers: ["Not until a FLEX temperature is inserted.", "Yes, by setting the thrust levers to the CLIMB detent", "Yes, by setting the thrust levers to the FLEX/MCT detent", "Yes, but only by using TOGA"],
        correct: 3
    },
    {
        question: "When does the bidirectional power transfer unit (PTU) enable the yellow system to pressurize the green system and vice versa?",
        answers: ["Only operational on the ground", "It operates automatically when a predetermined differential pressure is sensed", "It has to be switched on by the flight deck crew member when the differential pressure between systems (Green & Yellow) is >500 psi", "Only when the RAT has been deployed and the aircraft is using BAT power"],
        correct: 1
    },
    {
        question: "If one engine ANTI ICE system fails the second one takes over and provides anti icing for both the engines.",
        answers: ["Only with the aircraft on the ground and if OAT is below 0°C.", "It's not possible since the engine bleed sources are independent", "Yes, but on the ground the two position (Open & Closed) valve is closed", "The flight crew should switch to APU bleed air to replace the unserviceable unit"],
        correct: 1
    },
    {
        question: "In Normal law, if one side stick is rapidly pulled fully back, can the aircraft's maximum allowable G load be exceeded?",
        answers: ["Yes. Rapid side stick deflection must never be made", "Yes. Until maximum pitch attitude is reached the alpha floor protection is active", "No. At maximum G load, the side sticks are de-activated for 5 seconds", "No. The load factor protection overrides side stick commands to avoid excessive G loads"],
        correct: 3
    },
    {
        question: "Which hydraulic systems have fluid shutoff valves and why?",
        answers: ["Green and Yellow (operated by the engine fire switches) to isolate fluid from a fire.", "Green and Yellow (operated by switches on the OHP) in case of PTU failures.", "All systems; to isolate the systems in event of fluid loss.", "All systems; for use by maintenance."],
        correct: 0
    },
    {
        question: "What is the maximum brake temperature for takeoff (brake fans off)?",
        answers: ["720°C", "520°C", "300°C", "330°C"],
        correct: 2
    },
    {
        question: "On the overhead panel, when should the AUDIO SWITCHING be selected to CAPT 3?",
        answers: ["The Captain is using RMP tuning of the NAVAIDS.", "The Captain's ACP has failed.", "The Captain's loudspeaker has failed.", "Both RMPs have failed."],
        correct: 1
    },
    {
        question: "With either AP engaged, which statement is true?",
        answers: ["Both side sticks are locked. The lock cannot be overridden", "Both side sticks are deactivated until the AP is disengaged", "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP remains engaged", "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP will disengage"],
        correct: 3
    },
    {
        question: "When RMP tuning of the NAVAIDS is in operation, which of the following statements is true?",
        answers: ["The MCDU's will display the tuned navaids.", "There will be an amber light on the ACP.", "ILS DME is not available.", "The ILS receivers are tuned by their respective RMP's."],
        correct: 2
    },
    {
        question: "Which of the following is true with regard to the PTU?",
        answers: ["It is inhibited between engine starts.", "It is inhibited from electrical power-up until second engine start.", "It is used as a back-up following a leak in the Green or Yellow systems.", "It operates if the Green or Yellow system pressure falls below 2600 psi."],
        correct: 0
    },
    {
        question: "On an approach to land, which of the following statements is true?",
        answers: ["At 100 feet, alpha floor is inhibited; at 50 feet, the Flare Mode commences.", "At 100 feet, alpha floor is inhibited; the pitch trim is frozen; the aircraft pitches down.", "At 50 feet, alpha floor and pitch trim are inhibited; the aircraft pitches down.", "At 100 feet, alpha protection is lost; at 50 feet, the flare mode commences."],
        correct: 0
    },
    {
        question: "Which statement is correct when the APU FIRE pb is pushed to release it?",
        answers: ["Only if airborne, an APU EMER SHUT DOWN will occur", "On the ground you should perform the ECAM actions to shut down the APU from the cockpit", "An APU AUTO SHUT DOWN will occur if both detection loops are operating", "An APU EMER SHUT DOWN will occur, in the air or on the ground."],
        correct: 3
    },
    {
        question: "During a MANUAL START, when should the engine master switch be selected ON?",
        answers: ["When the N2 has ceased accelerating (minimum of 20 % N2).", "Immediately after selecting the MAN START to ON.", "At 15% N1.", "When IGN A + B appears on the engine System Display."],
        correct: 0
    },
    {
        question: "With the PACK FLOW controller selected to LO, the actual pack flow may be ...",
        answers: ["... HI due to APU bleed on.", "... NORM due to APU bleed on.", "... HI due to air conditioning temperature demands.", "... NORM or HI due to single pack operation."],
        correct: 0
    },
    {
        question: "On the HYD overhead panel, which of the following is true of any pump FAULT light?",
        answers: ["If it was due to overheat, it will extinguish when the fluid has cooled to normal temperature.", "It will remain illuminated until maintenance action has been taken.", "It will extinguish when the switch is placed to OFF.", "It is inhibited with engines running."],
        correct: 0
    },
    {
        question: "What is the maximum speed for each flap configuration?",
        answers: ["V stall speed.", "Green dot speed", "Vfe speed", "Vis speed"],
        correct: 2
    },
    {
        question: "What aircraft compartments are unpressurized?",
        answers: ["Forward and aft cargo compartments", "Main and nose gear bay, and tail cone", "Tail cone, radome, and forward cargo compartment", "Main gear bay and aft cargo compartment"],
        correct: 1
    },
    {
        question: "What happens in the event of BMC 1 failure?",
        answers: ["BMC 2 takes over all functions.", "An APU BLEED LEAK will not be detected.", "A left WING BLEED LEAK will not be detected.", "An ENG 2 BLEED LEAK will not be detected."],
        correct: 1
    },
    {
        question: "Regarding the pressurization system ... How are the safety valves controlled?",
        answers: ["They are controlled with the MAN V/S CTL selector", "They are controlled with the MODE SEL p/b sw", "They are controlled with the DITCHING pb sw", "They are fully automatic and cannot be controlled manually"],
        correct: 3
    },
    {
        question: "IRS IN ALIGN ECAM memo display becomes amber during an IR alignment if engines are running ...",
        answers: ["If one IRS becomes faulty", "If one IRS is not aligned", "and pulses GREEN if the alignment of at least one IRS is faulty", "when two IRS's are in disagreement regarding the aircraft position"],
        correct: 0
    },
    {
        question: "What triggers the autobrake system after landing?",
        answers: ["Selection of reverse thrust.", "Weight on wheels.", "Main wheel spin-up.", "Ground Spoiler extension."],
        correct: 3
    },
    {
        question: "What is the maximum continuous load per generator?",
        answers: ["85%.", "50%.", "75%.", "100%."],
        correct: 3
    },
    {
        question: "What is the certified maximum number of seats on the A320?",
        answers: ["There is no certified limit", "200", "180", "150"],
        correct: 2
    },
    {
        question: "In normal flight, what does sidestick deflection demand?",
        answers: ["load factor in pitch and proportional aileron and spoiler deflection in roll.", "load factor in pitch and rate of roll in roll.", "Rate of pitch change and 60° bank at full roll demand.", "A pitch attitude and rate of roll up to 33°."],
        correct: 1
    },
    {
        question: "What is signified by \"ILS APPR\" being displayed at the top center of the ND?",
        answers: ["The ILS button on the FCU has been pressed", "The ILS button on the EFIS control panel has been pressed", "An ILS approach has been entered in the MCDU F-PLN", "LOC and G/S have been captured"],
        correct: 2
    },
    {
        question: "For what areas does the Avionics ventilation system provide cooling?",
        answers: ["The avionics bay and the flight deck (including the instruments and circuit breakers)", "The avionics bay, the flight deck instruments and the CIDS panels", "The radio bay, the flight deck instruments, the circuit breaker panels and the CIDS panels", "The avionics bay, the flight deck instruments and the aircraft batteries"],
        correct: 0
    },
    {
        question: "Which of the following correctly describes the cross-bleed valve operation?",
        answers: ["In manual, it is electrically selected and pneumatically operated.", "In auto, it is pneumatically operated.", "In auto, it will automatically open, if necessary, to equalize the duct pressures.", "In auto, it will be closed if the engine bleed valves are open."],
        correct: 3
    },
    {
        question: "On ground, with the BLUE hydraulic pump switch at AUTO and with the AC POWER available, when will the pump operate?",
        answers: ["If one engine is running.", "Only after both engines have been started.", "Only when the aircraft is in flight.", "Only if the maintenance bus is connected."],
        correct: 0
    },
    {
        question: "What is the maximum wind speed for passenger door operation?",
        answers: ["70 knots", "65 knots", "55 knots (gusting 60 knots).", "52 knots"],
        correct: 1
    },
    {
        question: "The flight management part of the FMGC includes the following elements:",
        answers: ["Navigation, flight planning and A/THR commands", "Performance optimization, A/THR and AP commands", "Navigation, Flight planning, Performance optimization and flight predictions", "AP and FD commands and flight envelope computations"],
        correct: 2
    },
    {
        question: "Is it permissible to use reverse thrust to power back on the ground?",
        answers: ["Yes, but only in an uncongested area", "No, unless it is on a downslope", "No, it is prohibited", "Yes, if no push back tug is available"],
        correct: 2
    },
    {
        question: "What is the maximum altitude for APU single pack bleed air operation?",
        answers: ["39,100 ft", "30,000 ft", "22,500 ft", "15,000 ft"],
        correct: 2
    },
    {
        question: "Which of the following defines Icing conditions?",
        answers: ["Before T/O: OAT 15°C or below, contaminated runway.", "In flight: TAT 10°C down to SAT minus 30°C.", "In flight: SAT 10°C or below.", "Before T/O: OAT 10°C or below, visible moisture, visibility less than 1 mile."],
        correct: 3
    },
    {
        question: "How is a rapid IRS alignment carried out?",
        answers: ["On all transit stops by recycling the IR selectors OFF/ON.", "If on the ground set the IR Rotary Selectors to OFF then back to NAV within 5 seconds.", "If on the ground set the IR Rotary Selectors to OFF then back to NAV after more than 5 seconds.", "On all transit stops, by recycling the NAV and ADR switches OFF/ON."],
        correct: 1
    },
    {
        question: "After takeoff, you retract the landing gear and get this ECAM caution: SHOCK ABSORBER FAULT. What does it mean?",
        answers: ["The right main LG leg shortening mechanism has failed and the LG will not retract", "One shock absorber not extended when airborne", "The right main LG lengthening mechanism has failed and that leg will not retract", "The right main LG lengthening mechanism must be reset using the reset position on the LDG GEAR GRVTY EXTN sw"],
        correct: 1
    },
    {
        question: "The APU may be started and operated, even if the LOW OIL LEVEL ECAM advisory is displayed.",
        answers: ["True", "False", "The APU doesn't need OIL below FL 100", "The APU doesn't need OIL below FL 200"],
        correct: 0
    },
    {
        question: "When does the ECAM E/WD memo REFUELG appear?",
        answers: ["When the END Light illuminates steady green.", "When the refuel hose is connected to the coupling.", "When the MODE SELECT switch is placed to REFUEL", "When the refueling control panel door is open."],
        correct: 3
    },
    {
        question: "What is the purpose of the safety valves in the pressurization system?",
        answers: ["To protect against excessive cabin V/S in manual mode", "To protect against water ingress in the event of ditching", "To protect against excessive cabin altitude", "To protect against the cabin differential pressure from going too high or too low"],
        correct: 3
    },
    {
        question: "Under what conditions will the Autopilot disconnect?",
        answers: ["Bank Angle exceeds 45°, at Vmo / Mmo, if the speed reaches Alpha Prot +1°", "Bank Angle exceeds 45°, when High Speed Protection becomes active, if the speed reaches Alpha Prot", "Bank Angle exceeds 33°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1°", "Bank Angle exceeds 45°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1°"],
        correct: 3
    },
    {
        question: "APU air bleed extraction for wing anti-ice is permitted.",
        answers: ["False", "True", "Only in winter time", "Only if OAT is below ISA at sea level"],
        correct: 0
    },
    {
        question: "What occurs when the APU MASTER switch is selected to ON?",
        answers: ["The APU air intake flap opens and the starter motor engages immediately.", "The APU air intake flap opens and the starter motor engages when the flap is fully open.", "The APU fuel pump will operate.", "The APU air intake flap opens."],
        correct: 3
    },
    {
        question: "If a spoiler has failed, how does the system compensate for undesirable yaw?",
        answers: ["Automatic rudder trim.", "The symmetrical spoiler on the other wing is inhibited.", "F.A.C. commands.", "ELAC turn coordination commands."],
        correct: 1
    },
    {
        question: "Which of the following conditions will trigger a fire warning?",
        answers: ["loops A and B failure within 7 seconds of each other (Engine)", "loops A and B failure within 7 seconds of each other (APU)", "Fire detection by Loops A and B together (Engine)", "loss or failure of a single loop A (Engine)"],
        correct: 2
    },
    {
        question: "How could you turn off RMP 1?",
        answers: ["Via ON/OFF switch on RMP panel.", "Via switching panel on glare shield.", "Via circuit breaker.", "It will switch off automatically if on batteries."],
        correct: 0
    },
    {
        question: "What could be the cause if, during a pre-flight check, the IRS ALIGN lights are seen to be flashing?",
        answers: ["The IRS is using battery power.", "Loss of all functions except ATT and HDG.", "Failure to switch on the associated ADR.", "The IRS is awaiting a position entry."],
        correct: 3
    },
    {
        question: "What is the correct statement about the RAT?",
        answers: ["The RAT is able to pressurize the GREEN or the YELLOW systems", "The RAT will deploy automatically in the event of low pressure in the GREEN system", "The RAT will deploy automatically when AC bus 1 and 2 are both lost, airspeed above 100 kt", "The RAT can be stowed by the crew while they are airborne"],
        correct: 2
    },
    {
        question: "If both nosewheel steering handwheels are offset at the same time, which of the following is true?",
        answers: ["The Captain's input will override the F/O's input.", "The pilot making the larger input has control.", "The input to the nosewheel steering is the sum of both signals.", "The first pilot to offset the handwheel has control."],
        correct: 2
    },
    {
        question: "Regarding the Avionics Ventilation system, which of the following statements is true?",
        answers: ["The Extract Valve may be partially open when taxiing.", "The Inlet and Extract Valves may be open in flight.", "The Inlet and Extract Valves must both be open on the ground.", "The Inlet Valve should always be closed in flight."],
        correct: 3
    },
    {
        question: "Which of the following statements is correct with regard to the APU?",
        answers: ["APU auto shut down can only occur on the ground", "If bleed air has been used, when the APU MASTER SW is released an immediate APU shut-down will occur", "The APU will only shut down automatically if a fire is detected", "If the APU SHUT OFF p/b is pushed on the interphone panel under the nose fuselage, an emergency shut down will occur"],
        correct: 3
    },
    {
        question: "What does FADEC compute the thrust rating based on?",
        answers: ["The measured thrust lever angle", "The gross weight and ambient air temperature", "Pilot modifications of the performance database", "MCDU PERF or PROG page inputs"],
        correct: 0
    },
    {
        question: "On the Engine Panel, what does an illuminated FAULT light indicate?",
        answers: ["Abort of an AUTOMATIC START.", "A fault in the engine fire detection system.", "Engine fire extinguisher bottle pressure low.", "Failure of igniters A and B."],
        correct: 0
    },
    {
        question: "In Normal Law, what is the maximum bank angle you can reach with the side stick fully deflected?",
        answers: ["There is no bank angle limitation", "33°", "67°", "50°"],
        correct: 2
    },
    {
        question: "Regarding cabin pressure, what are the maximum differential pressures?",
        answers: ["+8.6 PSI, -1.0 PSI", "+8.5 PSI, -0.5 PSI", "+9 PSI, -1.0 PSI", "+8.06 PSI, -1.0 PSI"],
        correct: 2
    },
    {
        question: "When is the FUEL USED indication (on the ECAM SD) reset to zero?",
        answers: ["When the associated MASTER SW is selected OFF (on the ground only).", "When the associated MASTER SW is selected OFF (at any time).", "During associated engine start-up sequence (on the ground only).", "During associated engine start-up sequence (at any time)."],
        correct: 2
    },
    {
        question: "What is the minimum oil quantity for dispatch?",
        answers: ["9.5 qt + 0.5 qt per hour estimated flight time", "12.0 qt", "15.0 qt", "10.6 qt"],
        correct: 0
    },
    {
        question: "In the event of a hydraulic system overheat, the affected system will be indicated by a ...",
        answers: ["... FAULT light on the associated overhead panel pb.", "... FAULT light on the associated overhead panel pb after 30 seconds.", "... MASTER CAUTION on the MCDU.", "... FUEL memo on the E/WD."],
        correct: 0
    },
    {
        question: "Which of the following lists the correct actions to be carried out when performing a BLOWDOWN bottle test?",
        answers: ["All engine and APU fire warnings and a discharge light.", "The warnings only for the selected bottle.", "The cargo smoke detection and agent blowdown warnings.", "The discharge lights only."],
        correct: 1
    },
    {
        question: "What is the maximum altitude for APU start using aircraft batteries only?",
        answers: ["FL200", "FL100", "FL150", "FL250"],
        correct: 3
    },
    {
        question: "After engine start, how can the flight crew reset the BMC?",
        answers: ["By setting the BLEED pushbutton OFF then ON.", "By setting the affected BMC pushbutton on the overhead panel OFF then ON.", "By setting the BLEED pushbutton OFF.", "It can only be reset by maintenance action."],
        correct: 3
    },
    {
        question: "Which of the following correctly completes the statement? \"In the event of a loss of the green system, the alternate braking is powered by the yellow system and ...",
        answers: ["... is not affected by loss of anti-skid.", "... the accumulator is pressurized.", "... is available when the Yellow electric pump is on.", "... must be armed on the overhead panel."],
        correct: 1
    },
    {
        question: "What is the normal position of the PACK FLOW switch?",
        answers: ["Hi for all operations", "NORM for all operations", "LO if the aircraft is below 33,000 ft and passenger occupancy is less than 138", "NORM for take-off, HI for climb and LO for cruise."],
        correct: 1
    },
    {
        question: "Which of the following correctly completes this statement? \"The aircraft rudder travel is limited as a function of ...",
        answers: ["... airspeed.", "... altitude.", "... radio height.", "... flight phase."],
        correct: 0
    },
    {
        question: "Which of the following correctly completes this statement? \"There are ...",
        answers: ["... two Air Conditioning Units on the A320.", "... three Air Conditioning Units on the A320.", "... two Air Conditioning Units on the A320 and a ram air supply.", "... two Air Conditioning Units on the A320 and two additional emergency ram air inlets."],
        correct: 3
    },
    {
        question: "When are the PFD and ND decluttered?",
        answers: ["The PFD when passing 150 feet RA and the ND when passing 1500 feet RA.", "The PFD when passing 30 feet RA and the ND when passing 80 knots.", "The PFD when passing 30 feet RA and the ND when passing 1500 feet RA.", "The PFD when passing 1500 feet RA and the ND when passing 30 feet RA."],
        correct: 1
    },
    {
        question: "In the event of a complete loss of braking, which of the following lists the correct actions to be taken?",
        answers: ["Use of the Yellow hydraulic system, then the accumulator.", "Use of the Yellow system only.", "Apply full brake pedal force.", "Use of the accumulator only."],
        correct: 0
    },
    {
        question: "What is the normal power source for the IRUs?",
        answers: ["AC Bus 1 and AC Bus 2", "DC Bus 1 and DC Bus 2", "DC Bat Bus and AC ESS Bus", "DC Bat Bus only"],
        correct: 0
    },
    {
        question: "What do you have to do to obtain 100% oxygen when using the oxygen mask?",
        answers: ["Move the FLOW SELECTOR to the 100% position.", "Move the N/100% selector to the 100% position.", "Push the emergency test button.", "Move the N/100% selector to the 100% position and press the emergency test button."],
        correct: 1
    },
    {
        question: "In a fuel leak scenario, the fuel transfer system ...",
        answers: ["... will automatically start transferring fuel.", "... has to be manually activated.", "... should be selected off.", "... is automatically deactivated."],
        correct: 3
    },
    {
        question: "When does the APU bleed valve close automatically?",
        answers: ["When the APU is shut down.", "When the landing gear is selected down.", "When APU N1 is below 50%.", "When the APU bleed air pressure is sufficient."],
        correct: 0
    },
    {
        question: "When the aircraft is in alternate or direct law, what are the normal color of the PFD FPV, FD and FMA indications?",
        answers: ["FPV and FD in green; FMA in amber.", "FPV and FD in green; FMA in red.", "FPV in magenta; FD in green; FMA in amber.", "FPV in amber; FD and FMA in green."],
        correct: 2
    },
    {
        question: "When does the ECAM warning display the status page?",
        answers: ["Immediately following engine shutdown.", "Immediately following engine start-up.", "On selection of the APU.", "When ground power is connected."],
        correct: 0
    },
    {
        question: "On take-off, when the thrust levers are set to the FLEX detent, which of the following thrust modes will be displayed on the FMA?",
        answers: ["MAN THR", "MAN FLEX", "THR CLB", "THR FLX"],
        correct: 1
    },
    {
        question: "What is the meaning of the white arc on the N1 indication?",
        answers: ["Thrust command for active mode", "Thrust demand for active mode", "Position of the thrust levers", "Limitation on the N1 value for all modes"],
        correct: 2
    },
    {
        question: "When are the speed brakes inhibited in flight?",
        answers: ["Flaps in config 2", "Thrust levers above idle", "SEC 1 and 3 fail", "SEC 1 and 2 fail"],
        correct: 2
    },
    {
        question: "How is a pack overheat indicated?",
        answers: ["By an amber FAULT light on the AIR COND panel", "By an amber fault light on the COND SD page", "By an ECAM alert", "By a red fault light on the AIR COND panel"],
        correct: 0
    },
    {
        question: "What do you understand by the term \"Normal Law\"?",
        answers: ["Pitch attitude, load factor and low speed stabilities are the main protection features", "Load factor, attitude, high speed, high angle of attack and bank angle protections", "Maximum operating speed limitations, minimum operating speed limitations, and minimum descent rate limitations", "Load factor, pitch angle, alpha floor, high speed and bank angle protections"],
        correct: 1
    },
    {
        question: "After IRS realignment, the aircraft's position is automatically updated by ...",
        answers: ["GPS only.", "FMGC only.", "DME only.", "GPIRS."],
        correct: 3
    },
    {
        question: "What happens when the Evacuation Command pushbutton switch is pressed?",
        answers: ["An aural alert sounds in the cockpit only.", "The emergency evacuation signal sounds throughout the aircraft.", "An aural alert sounds in the cabin only.", "A signal is sent to the flight attendant panel."],
        correct: 3
    },
    {
        question: "Which of the following is the correct statement? The Side Stick Take Over pushbutton ...",
        answers: ["... must be used by the Captain when using the rudder pedals.", "... disengages the other stick, when pressed.", "... engages the other stick, when pressed.", "... must be used in the event of a failure of the autopilot."],
        correct: 1
    },
    {
        question: "What is the maximum altitude for APU two-pack bleed air operation?",
        answers: ["15,000 ft", "20,000 ft", "22,500 ft", "15,000 ft"],
        correct: 3
    },
    {
        question: "At what temperature do the engine bleed valves close automatically?",
        answers: ["100°C", "200°C", "85°C", "185°C"],
        correct: 1
    },
    {
        question: "If the slats and/or flaps are not in the expected configuration ...",
        answers: ["... a warning will be activated if the other pilot's side-stick is deflected.", "... the ECAM will present an advisory.", "... an audible warning will be activated.", "... the aircraft will automatically enter ALTERNATE LAW."],
        correct: 0
    },
    {
        question: "When is the side-stick priority indication seen?",
        answers: ["When there is simultaneous input to the side-sticks.", "When there is an out-of-trim condition.", "When the autopilot is engaged.", "When the aircraft is in ALTERNATE LAW."],
        correct: 0
    },
    {
        question: "What is the maximum altitude for landing gear operation?",
        answers: ["25,000 ft", "22,500 ft", "20,000 ft", "15,000 ft"],
        correct: 0
    },
    {
        question: "When an ELAC fails, what happens to the THS?",
        answers: ["THS is frozen.", "THS reverts to a mechanical standby.", "THS reverts to direct pitch control.", "THS remains active."],
        correct: 2
    },
    {
        question: "When do the Flight Warning Computers (FWCs) inhibit aural alerts?",
        answers: ["From 80 knots to 1,500 ft AGL on take-off.", "From 100 knots to 400 ft AGL on landing.", "From 80 knots to 100 ft AGL on landing.", "From 100 knots to 1,500 ft AGL on take-off."],
        correct: 0
    },
    {
        question: "What is the function of the Ram Air Turbine (RAT)?",
        answers: ["To provide AC power during an emergency.", "To provide hydraulic pressure during an emergency.", "To provide bleed air during an emergency.", "To provide essential electrical power in the event of an emergency."],
        correct: 1
    },
    {
        question: "What is the maximum altitude for APU bleed air extraction?",
        answers: ["30,000 ft", "20,000 ft", "25,000 ft", "22,500 ft"],
        correct: 1
    },
    {
        question: "On the fuel control panel, when will the transfer valves open?",
        answers: ["When the outer wing tanks are full.", "When the inner wing tanks are empty.", "When the inner wing tank fuel level decreases to 1,650 kg.", "When the outer wing tanks are empty."],
        correct: 2
    },
    {
        question: "What are the pitch and roll limits in Normal Law?",
        answers: ["Pitch: +20° (+10° at low speed), -15°, Roll: 45°.", "Pitch: +30° (+25° at low speed), -15°, Roll: 67°.", "Pitch: +25° (+20° at low speed), -15°, Roll: 45°.", "Pitch: +30°, Roll: 45°."],
        correct: 1
    },
    {
        question: "Which hydraulic system operates the landing gear?",
        answers: ["Green system.", "Blue system.", "Yellow system.", "Blue and Yellow systems."],
        correct: 0
    },
    {
        question: "If the sidestick priority indication shows green only ...",
        answers: ["... the other side-stick has been disengaged.", "... the autopilot is engaged.", "... both side-sticks are neutral.", "... both side-sticks are active."],
        correct: 3
    },
    {
        question: "What will the ECAM display when you disconnect the engine generators?",
        answers: ["A caution for each generator.", "A failure warning for the affected system.", "An electrical system schematic.", "A general electrical failure."],
        correct: 2
    },
    {
        question: "How can the flight crew select manual pressurization?",
        answers: ["By placing the DITCHING pushbutton to ON.", "By placing the MODE SEL pushbutton to MAN.", "By placing the CABIN PRESS MODE SEL pushbutton to MAN.", "By placing the MODE SEL pushbutton to AUTO."],
        correct: 1
    },
    {
        question: "When will the aircraft automatically enter ALTERNATE LAW?",
        answers: ["When multiple system failures occur.", "When the autopilot is disengaged.", "When the aircraft descends below 1,500 ft.", "When the side-sticks are deflected simultaneously."],
        correct: 0
    },
    {
        question: "When does the Flight Augmentation Computer (FAC) become active?",
        answers: ["Only during manual flight.", "Only when the autopilot is engaged.", "Only during flight on autopilot and manual flight.", "Only during manual flight and with the autopilot engaged."],
        correct: 3
    },
    {
        question: "What happens when the DITCHING pushbutton is selected ON?",
        answers: ["All valves below the water line are closed.", "The aircraft enters ditching mode.", "The fuel transfer valves are opened.", "All cabin outflow valves are closed."],
        correct: 0
    },
    {
        question: "What happens to the speed brake panels when the aircraft descends below 10,000 ft?",
        answers: ["They automatically retract.", "They remain in the selected position.", "They automatically extend.", "They retract to the half-speed position."],
        correct: 1
    },
    {
        question: "When the landing gear is down, what happens to the T.O. CONFIG TEST pushbutton?",
        answers: ["The T.O. CONFIG TEST pushbutton is inhibited.", "The T.O. CONFIG TEST pushbutton remains active.", "The T.O. CONFIG TEST pushbutton must be pressed to reset the system.", "The T.O. CONFIG TEST pushbutton is automatically reset."],
        correct: 0
    },
    {
        question: "What happens when the RAT MAN ON pushbutton is pressed?",
        answers: ["The RAT is manually deployed.", "The RAT is electrically armed.", "The RAT is automatically deployed.", "The RAT is locked in the stowed position."],
        correct: 0
    },
    {
        question: "Which of the following correctly completes the statement? \"The engine control system is designed to ...",
        answers: ["... provide automatic start-up only.", "... provide automatic start-up and shut down.", "... provide manual start-up and automatic shut down.", "... provide automatic start-up and manual shut down."],
        correct: 1
    },
    {
        question: "How many valves does the aircraft pressurization system have?",
        answers: ["Two", "Three", "Four", "Five"],
        correct: 3
    },
    {
        question: "What happens to the RAT if the aircraft speed drops below 140 kt?",
        answers: ["The RAT is automatically retracted.", "The RAT is manually retracted.", "The RAT is electrically disconnected.", "The RAT can no longer power the aircraft systems."],
        correct: 3
    },
    {
        question: "How is an automatic pressurization system fault indicated?",
        answers: ["By an amber fault light on the overhead panel.", "By a red warning on the ECAM.", "By an advisory on the ECAM.", "By an alert on the MCDU."],
        correct: 1
    },
    {
        question: "What is the role of the spoiler panels?",
        answers: ["They are used for roll control and ground spoilers.", "They are used for roll control only.", "They are used as speed brakes only.", "They are used as ground spoilers only."],
        correct: 0
    },
    {
        question: "What happens to the spoilers during an automatic landing?",
        answers: ["They are automatically retracted.", "They are automatically extended on touchdown.", "They remain in the selected position.", "They are manually extended."],
        correct: 1
    },
    {
        question: "When are the ECAM status and recall pages displayed?",
        answers: ["Immediately following an engine failure.", "Immediately following an engine shutdown.", "When ground power is connected.", "When the aircraft reaches cruising altitude."],
        correct: 1
    },
    {
        question: "When does the FUEL USED indication reset to zero?",
        answers: ["When the associated MASTER SW is selected OFF.", "During the associated engine shutdown sequence.", "During the associated engine start-up sequence.", "When the aircraft reaches cruising altitude."],
        correct: 2
    },
    {
        question: "What is the purpose of the oxygen system?",
        answers: ["To provide supplemental oxygen for the crew and passengers.", "To provide oxygen for the engines.", "To pressurize the cabin.", "To provide emergency oxygen for the crew only."],
        correct: 0
    },
    {
        question: "What happens to the aircraft systems when the RAT is deployed?",
        answers: ["The aircraft systems are powered by the main battery.", "The aircraft systems are powered by the RAT and the main battery.", "The aircraft systems are powered by the RAT only.", "The aircraft systems are powered by the RAT and the emergency generator."],
        correct: 3
    },
    {
        question: "What happens to the rudder when the aircraft is in direct law?",
        answers: ["The rudder remains in the last commanded position.", "The rudder is controlled by the autopilot.", "The rudder is manually controlled by the flight crew.", "The rudder is automatically centered."],
        correct: 2
    },
    {
        question: "What is the function of the emergency electrical configuration?",
        answers: ["To provide power to the essential systems during an emergency.", "To provide power to the essential systems when both engine-driven generators are inoperative.", "To provide power to the essential systems when the aircraft is on the ground.", "To provide power to the essential systems during an electrical failure."],
        correct: 1
    },
    {
        question: "When do the speed brakes automatically retract?",
        answers: ["When the aircraft reaches 10,000 ft.", "When the aircraft is in the landing configuration.", "When the thrust levers are advanced.", "When the autopilot is engaged."],
        correct: 2
    },
    {
        question: "When does the T.O. CONFIG TEST pushbutton inhibit the take-off configuration warnings?",
        answers: ["When the aircraft is on the ground.", "When the aircraft is in flight.", "When the aircraft reaches 100 knots.", "When the aircraft is in the landing configuration."],
        correct: 0
    },
    {
        question: "What happens to the landing gear when the LGCIU detects a fault?",
        answers: ["The landing gear remains in the last selected position.", "The landing gear automatically extends.", "The landing gear automatically retracts.", "The landing gear is manually controlled by the flight crew."],
        correct: 0
    },
    {
        question: "What is the role of the FACs in the flight control system?",
        answers: ["To provide flight envelope protection and rudder control.", "To provide pitch and roll control.", "To provide automatic landing capabilities.", "To provide autopilot and autothrust functions."],
        correct: 0
    },
    {
        question: "What happens to the aircraft's electrical system when the emergency generator is operating?",
        answers: ["The essential busses are powered by the emergency generator.", "All aircraft systems are powered by the emergency generator.", "The main battery powers the essential busses.", "The RAT powers the essential busses."],
        correct: 0
    },
    {
        question: "What is the maximum altitude for APU start using battery power only?",
        answers: ["20,000 ft", "25,000 ft", "30,000 ft", "35,000 ft"],
        correct: 1
    },
    {
        question: "When are the ECAM status and recall pages displayed?",
        answers: ["Immediately following an engine shutdown.", "When the aircraft reaches cruising altitude.", "When the aircraft is in the landing configuration.", "When the ground power is connected."],
        correct: 0
    },
    {
        question: "What happens when the MODE SEL pushbutton is selected to MAN?",
        answers: ["The pressurization system operates automatically.", "The pressurization system operates manually.", "The cabin outflow valves close automatically.", "The cabin outflow valves open automatically."],
        correct: 1
    },
    {
        question: "What is the purpose of the oxygen system?",
        answers: ["To provide supplemental oxygen for the crew and passengers.", "To pressurize the cabin.", "To provide oxygen for the engines.", "To provide emergency oxygen for the crew only."],
        correct: 0
    },
    {
        question: "What happens when the RAT is manually deployed?",
        answers: ["The aircraft systems are powered by the main battery.", "The aircraft systems are powered by the RAT and the emergency generator.", "The aircraft systems are powered by the RAT only.", "The aircraft systems are powered by the emergency generator only."],
        correct: 1
    },
    {
        question: "When does the T.O. CONFIG TEST pushbutton inhibit the take-off configuration warnings?",
        answers: ["When the aircraft is on the ground.", "When the aircraft is in flight.", "When the aircraft reaches 100 knots.", "When the aircraft is in the landing configuration."],
        correct: 0
    },
    {
        question: "What happens to the aircraft's electrical system when the emergency generator is operating?",
        answers: ["The essential busses are powered by the emergency generator.", "All aircraft systems are powered by the emergency generator.", "The main battery powers the essential busses.", "The RAT powers the essential busses."],
        correct: 0
    }
];
