"use client";

import { useState} from "react"
export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Collapsible Section</h1>
      <div className="border rounded p-4 bg-gray-50 shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left font-medium mb-2"
          aria-expanded={isOpen}
          role="button"
        >
          {isOpen ? 'Hide Section' : 'Show Section'}
        </button>
        {isOpen && (
          <div className="transition-all duration-300 ease-in-out">
            <p className="mb-4">This is the collapsible content!</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );

//     return (
//         // <div>
//         //     <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">About Massage</h1>
//         //     <p>There are many different types of massage, all of them with the goal of promoting healing and full body health.</p>
//         //     <p></p>

//         //     <h2 className="text-xl pt-10">
//         //         Goals
//         //     </h2>
//         //     <h3>Proper Posture</h3>
//         //     <p>Proper posture is important because it keeps the bones in the body doing the majority of the work.
//         //         Vertical stacking, ie, keeping the bones properly aligned on top of each other, transfers the weight of the body directly
//         //         from one bone down to the next, with minimal impact on the muscles.
//         //         A goal for life is healthy living. As part of that, people who have healthy, flexible muscles can experience less
//         //         pain on the day to day. Proper posture keeps the bones doing the heavy lifting, allowing the muscles to relax.</p>
//         //     <h2 className="text-xl pt-10">
//         //         Common Postural Problems
//         //     </h2>
            
//         //     <div className="pl-5">
//         //         <h3 className="pt-3">
//         //             Rounded Shoulders
//         //         </h3>
//         //         <p>Having a desk job often results in people with rounded forward shoulders. Over time, this can cause tightened pec muscles.
//         //             This limits the amount the shoulders can go into a proper vertical stacking alignment.
//         //         </p>
//         //         <h3 className="pt-3">
//         //             Tight Hips
//         //         </h3>
//         //         <p>
//         //             Often coming from having a desk job, or having a sedentary lifestyle, the quads get shortened over time, causing a forward rotated pelvis.
//         //             this can lead to lower back pain. Releasing the quads, IT band / TFL and iliopsoas muscles can help alleviate lower back pain.
//         //         </p>
//         //     </div>

//         // </div>
//         <div>
//   <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">About Massage</h1>
  
//   <p>Massage therapy offers a wide range of techniques, all designed to support the body’s natural healing process and promote overall wellness. Whether you're seeking relief from tension or looking 
// to enhance your physical health, massage can play a vital role in achieving balance.</p>

//   <h2 className="text-xl font-bold pt-10">Goals</h2>
  
//   <h3>Proper Posture</h3>
//   <p>Good posture is essential for long-term health. When the bones are properly aligned, they bear most of the body’s weight, reducing strain on muscles and allowing them to relax naturally. 
// Maintaining healthy flexibility in muscles can significantly reduce everyday discomfort. By prioritizing proper alignment, we create a foundation for pain-free movement and overall well-being.</p>

//   <h2 className="text-xl pt-10">Common Postural Problems</h2>
  
//   <div className="pl-5">
//     <h3 className="pt-3">Rounded Shoulders</h3>
//     <p>Long hours at a desk can lead to rounded, forward-leaning shoulders. This often tightens the chest muscles and limits the ability to achieve proper vertical alignment. Addressing this issue 
// through targeted massage helps restore balance and improve posture over time.</p>

//     <h3 className="pt-3">Tight Hips</h3>
//     <p>Tightness in the hips is commonly caused by prolonged sitting or a sedentary lifestyle, leading to shortened quads and a forward-rotated pelvis. This can contribute to lower back pain. Gentle 
// release of the quads, IT band, TFL, and iliopsoas muscles can help alleviate discomfort and restore mobility.</p>
//   </div>
//   <div>
// ### **1. Rounded Shoulders**  
// - **Cause**: Prolonged sitting or poor ergonomics leads to tight chest muscles (pectoralis) and weak upper back muscles (rhomboids).  
// - **Massage Help**: Targeting the chest muscles to release tension and improving mobility in the shoulders and upper back can help restore a more upright posture.  

// ---

// ### **2. Forward Head Posture**  
// - **Cause**: Poor neck alignment from screen time or slouching causes strain on the neck and shoulder muscles.  
// - **Massage Help**: Gentle work on the trapezius, levator scapulae, and cervical spine can reduce tension and improve head positioning.  

// ---

// ### **3. Tight Hips & Pelvic Imbalance**  
// - **Cause**: Sedentary lifestyles or uneven weight distribution can tighten hip flexors (quads) and weaken glutes, leading to a forward-tilted pelvis.ds  
// - **Massage Help**: Releasing tight quads, IT band, and piriformis muscles while targeting the glutes can restore balance and reduce lower back strain.  

// ---

// ### **4. Slouched Posture (Thoracic Spine Stiffness)**  
// - **Cause**: Lack of movement or poor posture weakens the thoracic spine’s natural curve, leading to a hunched upper back.  
// - **Massage Help**: Deep tissue work on the thoracic region and surrounding muscles can improve flexibility and encourage better spinal alignment.  

// ---

// ### **5. Uneven Shoulders**  
// - **Cause**: One-sided muscle tension or asymmetrical posture (e.g., carrying bags on one shoulder) creates imbalances.  
// - **Massage Help**: Addressing tightness in the dominant side’s chest and shoulders while relaxing the opposite side can help realign the body.  

// ---

// ### **6. Lower Back Pain from Poor Alignment**  
// - **Cause**: Weak core muscles or pelvic tilt often lead to lower back strain.  
// - **Massage Help**: Targeting the lumbar spine, glutes, and hip flexors can relieve tension and support healthier posture over time.  

// ---

// ### **7. Tight IT Band / Piriformis Syndrome**  
// - **Cause**: Repetitive movement (e.g., running) or poor alignment can irritate the piriformis muscle, leading to hip pain and compensatory postural shifts.  
// - **Massage Help**: Deep tissue work on the IT band and piriformis can reduce inflammation and improve hip mobility.  

// ---

// ### **Why Massage Works for Posture**  
// Massage therapy targets **muscle imbalances**, **fascial restrictions**, and **tension patterns** that contribute to poor posture. By restoring flexibility, reducing strain, and improving muscle 
// function, it supports the body’s natural alignment and reduces long-term discomfort.  

// </div>
// </div>

//     )
}