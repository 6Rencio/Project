
const qaData = [
  { question: "What are the three field sobriety tests?", answer: "Eye test, walk and turn, one leg stand" },
  { question: "When can a child be exempted to be seated in a child restraint system?", answer: "If the child requires immediate medical treatment" },
  { question: "When does a driver need to wear a helmet when riding a motorcycle?", answer: "For long or short drives and in any type of road or highway" },
  { question: "Can a driver use a photocopy of driver's license while driving?", answer: "No"},
  { question: "Registration of motor vehicle may be suspended if:", answer: "motor vehicle is capable of causing excessive damage to public roads" },
  { question: "What is the initial Driver's License Classification for applicants of a new license?", answer: "Non professional driver's license (NPDL)" },
  { question: "Where do you need to display your plate number?", answer: "one in front and one in the rear of the vehicle" },
  { question: "Where should an auxiliary lamp installed on a motorcycle be directed at?", answer: "pointed rightward" },
  { question: "What is the allowed age to apply for a Non Professional driver's license?", answer: "17 years old" },
  { question: "How many hours may a Temporary Operator's Permit (TOP) be used as a temporary driver's license?", answer: "72 hours" },
  { question: "What shall be the validity of a license that a driver may have if he/she has traffic violation at the time of renewal?", answer: "5 years validity" },
  { question: "A red- colored curb marking means______.", answer: "No parking" },
  { question: "What should you do to maximize the use of your headlights?", answer: "keep the windshield and mirrors clean" },
  { question: "Can a driver be given a 10-year validity license if he/she has traffic violation/s?", answer: "No" },
  { question: "A fabricated storage compartment fitted behind the seat of a motorcycle that is considered as a motorcycle accessory:", answer: "Customized Top-Box" },
  { question: "Can you drive a motorcycle if your license bears DL Code B ?", answer: "No" },
  { question: "If your vehicle is stopped at an intersection, in what color of traffic light can you compose your text messages?", answer: "None, texting is prohibited even if the vehicle is stopped at an intersection" },
  { question: "Which of the following statement is true?", answer: "A DL holder with authority to drive vehicles with manual transmission (MT) is allowed to operate vehicles with automatic transmission (AT)" },
  { question: "Where can you park your vehicle?", answer: "at a designated parking area" },
  { question: "Which of the following is the objective of Motor Vehicle User's Charge Law?", answer: "To fund and prevent premature deterioration of the road" },
  { question: "Is it allowed to drive a motorcycle on a public road pending the release of the Certificate of Registration?", answer: "No" },
  { question: "Motorcycle top box specifically designed for motorcycles and approved by DTI may not be subjected for inspection, registration or apprehension provided that:", answer: "All of the Above" },
  { question: "What violation may be applied if a driver passed the three field sobriety test?", answer: "the initial traffic violation" },
  { question: "Can an expired child restraint system be used when it still looks in good shape?", answer: "No" },
  { question: "Where should the number plate of a motorcycle be displayed?", answer: "At the rear of the motorcycle" },
  { question: "Registration of motor vehicle may be suspended if:", answer: "motor vehicle is found to be unsightly" },
  { question: "A storage compartment attached at the side of the motorcycle not higher than the seat of motorcycle that is considered as motorcycle accessory:", answer: "Saddle Bags/Box" },
  { question: "When can a child be exempted to be seated in a child restraint system?", answer: "If the child has a medical, mental, or psychological condition" },
  { question: " Where can you contest an alleged traffic violation?", answer: "at the traffic adjudication office concerned" },
  { question: "Who is responsible if a motorcycle was used in the commission of a crime?", answer: "owner, driver and backrider" },
  { question: "Who has the authority to confiscate a driver's license during a normal traffic violation?", answer: "LTO Law Enforcement Officers or LTO Deputized Agents" },
  { question: "Your license has just expired. Are you still authorized /allowed to drive to the nearest LTO to renew your driver's license?", answer: "No" },
  { question: "What should a law enforcer do upon seizing a motorcycle from a traffic offender?", answer: "Send the motorcycle to the impounding area" },
  { question: "Under R.A. No. 11229, What is the allowable age that a child may sit in front passenger seat of a car?", answer: "more than 12 years old" },
  { question: "What is the violation of a driver overtaking at an intersection having a one lane direction?", answer: "Overtaking at an intersection" },
  { question: "Who will win between two parties if they failed to overcome stress?", answer: "neither the aggressor nor the victim" },
  { question: "When may you lend your driver's license?", answer: "Under no circumstances" },
  { question: "What is the maximum height that a driver can install his mobile phone from the base of the dashboard?", answer: "4 inches" },
  { question: "What must you do approaching a blinking yellow traffic light?", answer: "proceed with caution" },
  { question: "When parking, how many meters is allowed from the location of a fire hydrant?", answer: "more than four meters of the fire hydrant" },
  { question: "Under the Children's Safety on Motorcycles Act, a child below 18 years old can't ride in a two-wheeled motorcycle on public roads unless:", answer: "The child can comfortably reach his/her feet on the standard foot peg of the motorcycle, his/her arms can reach around and grasp the waist of the motorcycle driver, and he/she is wearing the standard protective helmet." },
  { question: "What should a driver do while another vehicle is trying to overtake?", answer: "Continue with current speed" },
  { question: "When can a child be exempted to be seated in a child restraint system?", answer: "If the child requires immediate medical treatment" },
  { question: "Which of the following actions may result in road rage?", answer: "cutting off other vehicles or following too close" },
  { question: "A 30-day suspension of the driver's license shall be imposed if:", answer: "The driver fails to pay the corresponding penalty of the apprehension within 15 days" },
  { question: "When you are about to turn left then a fast-moving vehicle from the other side of the road suddenly heads to the direction you intended to turn. What will you do?", answer: "allow the fast-moving vehicle to pass" },
  { question: "Who is exempted from Republic Act No. 10666 or Children's Safety on Motorcycle Act?", answer: "Child who needs to be transported for immediate medical attention" },
  { question: "What shall be the color of auxiliary lamps installed at the front of a vehicle?", answer: "white or yellowish white" },
  { question: "What is the maximum validity of license that a driver may have if he/she has no traffic violation at the time of renewal?", answer: "10 years validity" },
  { question: "Who are exempted from using seat belts?", answer: "Motorcycle riders or tricycle drivers" },  
  { question: "What should you do if a friend-passenger request to be dropped off in a no loading and unloading zone?", answer: "Do not open the door until vehicle reaches the correct zone" },
  { question: "What is the primary objective of the Seat Belt Act?", answer: "To secure and safeguard the passengers and drivers of a motor vehicles" },
  { question: "What type of motor vehicles are covered by Motor Vehicle User's Charge Law?", answer: "All motor vehicles registered with LTO" }, 
  { question: "These are the places that parking is not allowed.", answer: "Intersection, crosswalks" },
  { question: "What driver's license classification(s) are/is required to use the seat belts?", answer: "Both for professional and nonprofessional driver's license holder" },
  { question: "What type of helmet should a rider must use?", answer: "Standard motorcycle helmet compliant to specifications of DTI" },
  { question: "Are you allowed to park at a bus or jeepney stop?", answer: "No" },
  { question: "You are driving at a speed of 80 kph, along a municipal road, and suddenly a child crosses the street. What should you do ?", answer: "step on the brake" },
  { question: "What should a driver of a light vehicle do before overtaking a 6-wheeler truck?", answer: "do not overtake if not properly seen" },
  { question: "What is the main purpose of having a vehicle undergo regular vehicle maintenance inspection?", answer: "to check the roadworthiness of the vehicle" },
  { question: "Driving a long and wide truck on a curve, you are about to turn and there is a motorcycle overtaking on a curve coming from the opposite direction. How do you react to this situation?", answer: "if possible, stop to avoid road crash" },
  { question: "When you want to change or shift to higher gear to speed up, and a car in the opposite direction crosses quickly to your lane, what will you do?", answer: "be alert, stop and give way to the car crossing" },
  { question: "When shall an Alcohol Breath Analyzer (ABA) be used?", answer: "When the driver failed at least one of the field sobriety tests" },
  { question: "Where should you stay in an expressway with two lanes going in the same direction?", answer: "At the rightmost lane" },  
  { question: "Who has the first right of way when two vehicles coming from different directions approach an intersection at almost the same time?", answer: "the vehicle on the right" },
  { question: "Which of the following is a quality of a defensive driver?", answer: "drivers with positive attitude on road safety" },
  { question: "When do you need to use your seat belt?", answer: "While the engine is running and before moving off" },
  { question: "What is the height requirement for a child to be exempted to use a child restraint system?", answer: "150 cms and above" },
  { question: "What is the ultimate result of a road rage?", answer: "death" },
  { question: "Is using a mobile phone illegal while driving?", answer: "Yes, if the driver is not using a hands-free mode for the mobile phone" },
  { question: "What will happen if the driver refuses to undergo mandatory testing, if such a driver is suspected of driving under the influence of liquor?", answer: "Confiscation of driver's license and consequent automatic revocation" },
  { question: "How many hours may a Temporary Operator's Permit (TOP) be used as a temporary driver's license?", answer: "72 hours" },
  { question: "Can a driver who had the opportunity to avoid a road crash and neglected to avoid such road crash be jointly held liable?", answer: "Yes" },
  { question: "What do you need to do upon parking and getting out of the vehicle?", answer: "engage the parking brake" },
  { question: "At an intersection, what should you do when an emergency vehicle is following you?", answer: "Cross the intersection first before giving the right of way" },
  { question: "At an intersection, what should you do when an emergency vehicle is following you?", answer: "Cross the intersection first before giving the right of way" },
  { question: "What should be the appropriate action when you see this traffic sign?", answer: "Slow down and be more alert than usual" },
  { question: "Can a driver allow a cyclist to hitch on his vehicle?", answer: "No" },
  { question: "At a roundabout with multiple lanes, where should you stay if you are planning to turn right on the next intersection?", answer: "At the rightmost lane" },
  { question: " Is a driver allowed to load cargo more than the vehicle's registered load capacity?", answer: "No" },
  { question: "When can a driver be allowed to use his mobile phone while driving?", answer: "Calling authorities to report a crime or road crash" },
  { question: " When you do not see the wheels of the vehicles in front of you, should you do?", answer: "Slow down and get back to a safe following distance" },
  { question: "While driving with maximum speed and you have to stop suddenly, you should:", answer: "apply your brakes gently with steady pressure" },
  { question: "On a wet road, you must:", answer: "slow down" },
  { question: "When planning to overtake a slower vehicle in front of you at night, you should:", answer: "flick your dimmer, switch two or three times to signify your intention to the driver of the vehicle that you intend to overtake" },
  { question: "At an intersection without stop or yield signs, two cars reach the intersection at the same time. Which car has the right-of-way?", answer: "the car on the right" },
  { question: "A car is positioned in an intersection waiting to turn left when the traffic signal light turns red. Who should go first?", answer: "the driver caught in the intersection waiting to turn left" },
  { question: "At an intersection without stop or yield signs, two cars approach from different streets. Which car has the right-of-way?", answer: "the vehicle already in the intersection" },
  { question: "The driver of a car traveling on a highway is required to yield to", answer: "pedestrian" },
  { question: "Before moving your car from a parked position, you should", answer: "check other traffic, signal and pull from curb when it is safe to do so" },
  { question: "The speed limit within a school zone during school days is", answer: "20 kph" },
  { question: "A good driving attitude of a driver is", answer: "drive defensively" },
  { question: "Drivers gather most information with their", answer: "eyes" },
  { question: "Which of the following is most recommended in a way of dealing with fatigue on a long trip?", answer: "stop periodically for rest and exerciseh" },
];

function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (input === "") {
    resultDiv.innerHTML = ""; // Clear result if nothing is typed
    return;
  }

  const matches = qaData.filter(qa =>
    qa.question.toLowerCase().includes(input) ||
    qa.answer.toLowerCase().includes(input)
  );

  if (matches.length > 0) {
    resultDiv.innerHTML = matches.map(result =>
      `<p><strong>Q:</strong> ${result.question}<br><strong>A:</strong> ${result.answer}</p>`
    ).join("");
  } else {
    resultDiv.innerHTML = "No match found.";
  }
}