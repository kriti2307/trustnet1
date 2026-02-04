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
  { name: "Dr. Chhatar Singh Lamba", role: "General Chair", designation: "Professor & Associate Dean", image: "cslamba.webp" },
  { name: "Prof. Dr. Neha Chaudhary", role: "Program Chair", designation: "Professor & HoD, CSE", image: "Neha-Chaudhary.webp" },
  { name: "Dr. U. S. Rawat", role: "Program Co-Chair", designation: "Professor", image: "us-rawat.webp" },
  { name: "Dr. Satyabrata Roy", role: "Program Co-chair", designation: "Associate Professor, CSE", image: "Dr-Satyabrata-Roy.webp" },
  { name: "Dr. Mahesh Jangid", role: "Program Co-Chair", designation: "Associate Professor, CSE", image: "Mahesh-Jangid.webp" },
  { name: "Dr. Amit Garg", role: "Organizing Chair", designation: "Associate Professor, CSE", image: "amit-garg.webp" },
  { name: "Dr. Ankur Pandey", role: "Organizing Chair", designation: "Assistant Professor, CSE", image: "ankur-pandey.webp" },
  { name: "Dr. Amit Kumar Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor, CSE", image: "amit-kumar-gupta.webp" },
  { name: "Dr. Neetu Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor, CSE", image: "neetu-gupta.webp" },
  { name: "Dr. Sayar Singh Shekhawat", role: "Publicity Chair", designation: "Associate Professor, CSE", image: "sayar-singh.webp" },
  { name: "Dr. Usha Jain", role: "Publicity Chair", designation: "Assistant Professor, CSE", image: "usha-jain.webp" },
  { name: "Dr. Surbhi Sharma", role: "Publicity Chair", designation: "Assistant Professor, CSE", image: "surbhi-sharma.webp" },
  { name: "Dr. Satpal Singh Kushwaha", role: "Technical Chair", designation: "Assistant Professor, CSE", image: "satpal-singh-kushwaha.webp" },
  { name: "Dr. Lokesh Sharma", role: "Technical Chair", designation: "Associate Professor, IT", image: "lokesh-sharma.webp" },
  { name: "Dr. Sumit Srivastava", role: "Technical Chair", designation: "Assistant Professor, IT", image: "sumit-srivastava.webp" },
  { name: "Dr. Rishi Gupta", role: "Finance Chair", designation: "Associate Professor, CSE", image: "rishi-gupta.webp" },
  { name: "Dr. Akshay Jadhav", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "akshay-jadhav.webp" },
  { name: "Dr. Mayank Namdev", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "mayank-namdev.webp" },
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
                  className="bg-[#F27023] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
                >
                  <div className="aspect-[3/4] w-full bg-gray-200 overflow-hidden">
                    <img
                      src={`/assets/committee/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}



