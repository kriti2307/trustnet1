import React from "react";

/* ================= INTERNATIONAL ================= */
const INTERNATIONAL_ADVISORY = [
  "Prof. Jitesh S.B. Gajjar, USA",
  "Prof. Jagdish Prakash, South Africa",
  "Prof. Loannis E. Sarris, Greece",
  "Prof. Gunasekaran Nallappan, China",
  "Prof. Dinesh Kumar Sharma, USA",
  "Prof. Mohammad M Khalaf, Egypt",
  "Prof. Mohammad M Ali Al-Shamiri, Saudi Arabia",
  "Prof. Yousef Al-Qudah, Jordan",
  "Prof. Syed Omar Shah, China",
  "Prof. Kaouther Ghachem, Saudi Arabia",
  "Prof. Ahmed Mir, Saudi Arabia",
  "Prof. Chemseddine Maatki, Saudi Arabia",
  "Prof. Lioua Kolsi, Saudi Arabia",
];

/* ================= NATIONAL ================= */
const NATIONAL_ADVISORY = [
  "Prof. Prasad Patnaik BSV, IIT Madras",
  "Prof. Gauri Shankar Seth, IIT (ISM) Dhanbad",
  "Prof. Debashis Dutta, NIT Warangal",
  "Prof. Arif Ali Baigh Moghal, NIT Warangal",
  "Prof. Surender Singh, Kurukshetra University, Haryana",
  "Prof. Dharmendra Tripathi, NIT Uttarakhand",
  "Prof. Sunil, NIT Hamirpur",
  "Prof. Peeyush Chandra, IIT Kanpur",
  "Prof. A. Benerji Babu, NIT Warangal",
  "Prof. Aijaz-Ul-Islam, NIT Srinagar",
  "Prof. Rajesh Kumar Gupta, Central University of Haryana",
  "Prof. Arun Kajla, Central University of Haryana",
];

/* ================= TECHNICAL ================= */
const TECHNICAL_COMMITTEE = [
  "Prof. Sunny Kumar Sharma, SMVD University Jammu",
  "Prof. Ramakrishna Manchi, NIT Silchar",
  "Prof. Jaganath Roy, NIT Warangal",
  "Prof. Muzaffar Ahmad Dar, Akal University, Punjab",
  "Prof. Lateef Ahmad Wani, Thapar Institute of Engineering and Technology, Punjab",
  "Prof. Arif Billah Dar, SMVD University Jammu",
  "Prof. Faizan Danish, VIT Andhra Pradesh",
  "Prof. Subhabrata Rath, VIT Vellore",
  "Prof. S. Eswaramoorthi, CIT, Chennai",
  "Prof. S. Sivaraj, NIT Jalandhar",
  "Prof. Gopal Chandra Shit, Jadavpur University, Kolkata",
  "Prof. Rushi Kumar, VIT Vellore",
];
/* ================= ORGANIZING ================= */
const ORGANIZING_COMMITTEE = [
  { name: "Mr. S. Vaitheeswaran", role: "Chief Patron", designation: "Chairperson", image: "S-Vaitheeswaran.webp" },
  { name: "Prof. Dr. N. N. Sharma", role: "Patron", designation: "President", image: "dr-nnsharma.webp" },
  { name: "Dr. Karunakar A Kotegar", role: "Co-Patron", designation: "Pro-President", image: "karunakar-kotegar.webp" },
  { name: "Dr. Amit Soni", role: "Co-Patron", designation: "Registrar", image: "amit-soni.webp" },
  { name: "Prof. Nitu Bhatnagar", role: "Co-Patron", designation: "Provost", image: "Nitu-Bhatnagar.webp" },
  { name: "Prof. Dr. Kuldip Singh Sangwan", role: "General Chair", designation: "Dean – Faculty of Engineering", image: "Dr-Kuldip-Singh.webp" },
  { name: "Prof. Ashima Bagaria", role: "General Chair", designation: "Professor & Associate Dean", image: "Dr. Ashima Bagaria.jpg" },

  { name: "Prof. Reema Jain", role: "Program Chair", designation: "Head, Department of Mathematics and Statistics", image: "Dr Reema Jain.jpg" },
  { name: "Prof. Swaroop Nandan Bora", role: "Program Chair", designation: "Professor, Department of Mathematics, IIT Guwahati, India", image: "Swaroop Nandan Bora.jpg" },
  { name: "Prof. Verdiana Grace Masanja", role: "Program Chair", designation: "Department of Mathematics, Nelson Mandela African Institution of Science and Technology (NM-AIST), Africa", image: "Prof. Verdiana Grace Masanja.jpg" },

  { name: "Dr Abdul Haseeb Ganie", role: "Convener", designation: "Assistant Professor (Research Track), Department of Mathematics and Statistics", image: "Dr Abdul Haseeb Ganie.jpg" },
  { name: "Dr Loganathan Karuppusamy", role: "Convener", designation: "Assistant Professor (Research Track), Department of Mathematics and Statistics", image: "Dr Loganathan Karuppusamy.jpg" },

  { name: "Dr Vipin Kumar", role: "Organizing Secretary", designation: "Assistant Professor, Department of Mathematics and Statistics", image: "Dr Vipin Kumar.jpg" },
  { name: "Dr Shamshad Ur Rasool", role: "Organizing Secretary", designation: "Assistant Professor, Department of Mathematics and Statistics", image: "Dr Shamshad Ur Rasool.jpg" },
  { name: "Dr Anil Ahlawat", role: "Organizing Secretary", designation: "Assistant Professor, Department of Mathematics and Statistics", image: "Dr Anil Ahlawat.jpg" },
  { name: "Dr Vijaypal Poonia", role: "Organizing Secretary", designation: "Assistant Professor, Department of Mathematics and Statistics", image: "Dr Vijaypal Poonia.jpg" },
  { name: "Dr Bijender Singh", role: "Organizing Secretary", designation: "Assistant Professor, Department of Mathematics and Statistics ", image: "Dr Bijender Singh.jpg" },
];


/* ================= COMPONENT ================= */
export default function Committee({ type }) {
  const isAdvisory = type === "advisory";

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-gray-800 mb-16">
            {isAdvisory ? "Committee" : "Organizing Committee"}
            <div className="w-24 h-1 bg-orange-500 mt-3 rounded-full" />
          </h1>

          {isAdvisory ? (
            <>
              {/* International */}
              <div className="mb-20">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  International Committee
                </h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                  {INTERNATIONAL_ADVISORY.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* National */}
              <div className="mb-20">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  National Committee
                </h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                  {NATIONAL_ADVISORY.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Technical */}
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  Technical Committee
                </h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                  {TECHNICAL_COMMITTEE.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ORGANIZING_COMMITTEE.map((member, idx) => (
  <div
    key={idx}
    className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-[1.03] transition"
  >
    {/* ROUND IMAGE */}
    <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 shadow-md">
      <img
        src={`/assets/committee/${member.image}`}
        alt={member.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* TEXT */}
    <h3 className="text-lg font-semibold text-gray-800">
      {member.name}
    </h3>

    <p className="text-trustnet-primary font-medium mt-1">
      {member.role}
    </p>

    <p className="text-gray-600 text-sm mt-1">
      {member.designation}
    </p>
  </div>
))}

            </div>
          )}

        </div>
      </section>
    </div>
  );
}



