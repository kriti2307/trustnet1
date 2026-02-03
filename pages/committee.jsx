import React from "react";

/* ================= INTERNATIONAL ================= */

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
  "Florin POPENTIU VLĂDICESCU, University “Politehnica” of Bucharest and Co-Chairholder to UNESCO Chair, University of Oradea, Romania",
  "Álvaro Rocha, University of Coimbra, Portugal",
  "Weiler Finnamore, Universidade Federal de Juiz de Fora, Brazil",
  "Hamurabi Gamboa-Rosales, Autonomous University of Zacatecas, Mexico",
  "Pushpendu Kar, University of Nottingham UK (China campus)",
  "Mohammad Nasar, Mazoon College Muscat, Sultanate of Oman",
  "Mohammad Abu Kausar, University of Nizwa, Sultanate of Oman",
  "Anand Nayyar, Duy Tan University, Da Nang, Vietnam",
  "Aruna Kumar S V, University of Beira Interior Covilha, Portugal",
];

/* ================= NATIONAL ================= */

const NATIONAL_ADVISORY = [
  "Virendra Singh, Indian Institute of Technology Bombay, India",
  "Amitava Das, Director, CSIR-CSMCRI, Distinguished Professor AcSIR, Bhavnagar, Gujarat, India",
  "Manu Pratap Singh, Dr. Bhimrao Ambedkar University, Agra, India",
  "Amit Chaturvedi, Govt Engineering College Ajmer, Ajmer, India",
  "Sunil Kumar Muttoo, University of Delhi, India",
  "Vipin Tyagi, Jaypee University of Engineering and Technology Guna, India",
  "K. Lobiyal, Jawaharlal Nehru University, Delhi, India",
  "K. Mishra, Chairman, ACM Udaipur Chapter, India",
  "V. Desai, Vice Chancellor, MVN University, Haryana, India",
  "Sudeep Tanwar, Nirma University, Ahmedabad, India",
  "C. Bishnoi, ACM Udaipur Chapter, India",
  "Amit Joshi, Secretary, ACM Udaipur Chapter, India",
  "Durgesh Mishra, Shri Aurobindo Institute of Technology, Indore, MP, India",
  "Vijay Singh Rathore, IP Chairman (CSI Jaipur Chapter), India",
  "Saroj, Guru Jambheshwar University of Science and Technology, Hisar, India",
  "Yudhvir Singh, Maharshi Dayanand University, Rohtak, India",
  "Santosh Vishwakarma, Gyan Ganga Institute of Technology and Sciences, Jabalpur, India",
  "Rishi Pal Singh, Guru Jambheshwar University of Science and Technology, Hisar, India",
  "Rahul Rishi, Maharshi Dayanand University, Rohtak, India",
  "Neeta Nain, Malaviya National Institute of Technology, Jaipur, India",
  "Om Parkash Sangwan, Guru Jambheshwar University of Science and Technology, Hisar, India",
  "Sumeet Gill, Maharshi Dayanand University, Rohtak, India",
  "Pankaj Lathar, Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India",
  "Girish Sharma, Bhai Parmanand Institute of Business Studies, Delhi, India",
  "Naveen Kumar, Indira Gandhi National Open University, New Delhi, India",
  "Amit Choudhary, Maharaja Surajmal Institute, New Delhi, India",
  "Srinivasa K G, Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India",
  "Anoop Singh Poonia, Vivekananda Global University, Jaipur, India",
  "Pradeep Tomar, Gautam Buddha University, Greater Noida, India",
  "Mukesh Kumar Sharma, The Technological Institute of Textile & Sciences, Bhiwani, India",
  "Sanjay Kumar Sharma, Banasthali Vidyapith, Rajasthan, India",
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

          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-16">
            {isAdvisory ? "Advisory Board" : "Organizing Committee"}
            <div className="w-24 h-1 bg-orange-500 mt-3 rounded-full" />
          </h1>

          {isAdvisory ? (
            <>
              {/* International Advisory Board */}
              <div className="mb-20">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  International Advisory Board
                </h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                  {INTERNATIONAL_ADVISORY.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* National Advisory Board */}
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                  National Advisory Board
                </h2>
                <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                  {NATIONAL_ADVISORY.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            /* Organizing Committee - Card Grid (4 per row) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ORGANIZING_COMMITTEE.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-[#F27023] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] w-full bg-gray-200 overflow-hidden">
                    <img
                      src={`/assets/committee/${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
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


