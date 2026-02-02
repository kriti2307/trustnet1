import React from "react";

/* International Advisory Board */
const INTERNATIONAL_ADVISORY = [
  "Vidyacharan Bhaskar, San Francisco State University, San Francisco, CA, USA",
  "Rajkumar Buyya, University of Melbourne, Australia",
  "Irfa Javed, Manager-Partnership (South Asia), Deakin University, Australia",
  "Robin T. Bye, Norwegian University of Science and Technology, Alesund, Norway",
  "Max Henrique Machado Costa, University of Campinas, Brazil",
  "Aleksander Karadimche, UIST, Northern Rep. of Macedonia",
  "Dijana Capeska Bogatinoska, UIST, Northern Rep. of Macedonia",
  "Dmytro Zubov, Technical University of Ostrava, Czech Republic",
  "Danish Ather, Amity University, Tashkent",
  "Biju Issac, Northumbria University, Newcastle, UK",
  "Pinnamaneni Bhanu Prasad, Kelenn Technology, France",
  "Vijander Singh, Norwegian University of Science and Technology (NTNU), Alesund, Norway",
  "Kristina, Technical University of Varna, Bulgaria",
  "Tomas Sochor, Technical University of Ostrava, Czech Republic",
  "Eustrat Zhupa, University of Rochester, Rochester, NY",
  "Monika Polak, Rochester Institute of Technology, Rochester, NY",
  "Florin POPENTIU VLĂDICESCU, University “Politehnica” of Bucharest, Romania",
  "Álvaro Rocha, University of Coimbra, Portugal",
  "Weiler Finnamore, Universidade Federal de Juiz de Fora, Brazil",
  "Hamurabi Gamboa-Rosales, Autonomous University of Zacatecas, Mexico",
  "Pushpendu Kar, University of Nottingham UK (China campus)",
  "Mohammad Nasar, Mazoon College Muscat, Oman",
  "Mohammad Abu Kausar, University of Nizwa, Oman",
  "Anand Nayyar, Duy Tan University, Vietnam",
  "Aruna Kumar S V, University of Beira Interior, Portugal",
];

/* National Advisory Board */
const NATIONAL_ADVISORY = [
  "Virendra Singh, IIT Bombay, India",
  "Amitava Das, CSIR-CSMCRI, India",
  "Manu Pratap Singh, DBRAU Agra, India",
  "Amit Chaturvedi, GEC Ajmer, India",
  "Sunil Kumar Muttoo, University of Delhi, India",
  "Vipin Tyagi, JUET Guna, India",
  "K. Lobiyal, JNU Delhi, India",
  "K. Mishra, ACM Udaipur Chapter, India",
  "V. Desai, MVN University, Haryana, India",
  "Sudeep Tanwar, Nirma University, India",
  "Santosh Vishwakarma, GGITS Jabalpur, India",
  "Neeta Nain, MNIT Jaipur, India",
  "Sanjay Kumar Sharma, Banasthali Vidyapith, India",
];

/* Organizing Committee */
const ORGANIZING_COMMITTEE = [
  { name: "Mr. S. Vaitheeswaran", role: "Chief Patron", designation: "Chairperson", image: "S-Vaitheeswaran.webp" },
  { name: "Prof. Dr. N. N. Sharma", role: "Patron", designation: "President", image: "dr-nnsharma.webp" },
  { name: "Dr. Karunakar A Kotegar", role: "Co-Patron", designation: "Pro-President", image: "karunakar-kotegar.webp" },
  { name: "Dr. Amit Soni", role: "Co-Patron", designation: "Registrar", image: "amit-soni.webp" },
  { name: "Dr. Amit Garg", role: "Organizing Chair", designation: "Associate Professor, CSE", image: "amit-garg.webp" },
  { name: "Dr. Ankur Pandey", role: "Organizing Chair", designation: "Assistant Professor, CSE", image: "ankur-pandey.webp" },
  { name: "Dr. Neetu Gupta", role: "Organizing Co-Chair", designation: "Assistant Professor, CSE", image: "neetu-gupta.webp" },
  { name: "Dr. Surbhi Sharma", role: "Publicity Chair", designation: "Assistant Professor, CSE", image: "surbhi-sharma.webp" },
  { name: "Dr. Satpal Singh Kushwaha", role: "Technical Chair", designation: "Assistant Professor, CSE", image: "satpal-singh-kushwaha.webp" },
  { name: "Dr. Lokesh Sharma", role: "Technical Chair", designation: "Associate Professor, IT", image: "lokesh-sharma.webp" },
  { name: "Dr. Sumit Srivastava", role: "Technical Chair", designation: "Assistant Professor, IT", image: "sumit-srivastava.webp" },
  { name: "Dr. Rishi Gupta", role: "Finance Chair", designation: "Associate Professor, CSE", image: "rishi-gupta.webp" },
  { name: "Dr. Akshay Jadhav", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "akshay-jadhav.webp" },
  { name: "Dr. Mayank Namdev", role: "Publication Chair", designation: "Assistant Professor, CSE", image: "mayank-namdev.webp" },
];

export default function Committee() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-6xl mx-auto">

      {/* Organizing Committee Section */}
      <section id="organizing-committee" className="mb-20 scroll-mt-20">
        <h1 className="text-4xl font-bold text-slate-700 mb-3">Organizing Committee</h1>
        <div className="w-24 h-1 bg-trustnet-primary rounded-full mb-6" />
        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
          The Organizing Committee oversees the planning and execution of TrustNet 2026.
        </p>
        <div className="space-y-4">
          {ORGANIZING_COMMITTEE.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-5"
            >
              <img
                src={`/assets/committee/${m.image}`}
                alt={m.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-1 flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
                <span className="font-semibold text-gray-800 text-lg">{m.name}</span>
                <div className="flex flex-col sm:items-end gap-0.5">
                  <span className="text-trustnet-primary font-medium">{m.role}</span>
                  <span className="text-gray-600 text-sm">{m.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <h1 className="text-4xl font-bold mb-6">Advisory Board</h1>

      <h2 className="text-2xl font-semibold mb-2">International Advisory Board</h2>
      <ul className="list-disc list-inside mb-8">
        {INTERNATIONAL_ADVISORY.map((m, i) => <li key={i}>{m}</li>)}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">National Advisory Board</h2>
      <ul className="list-disc list-inside">
        {NATIONAL_ADVISORY.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}
