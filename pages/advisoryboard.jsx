import React from "react";

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
  "Vijander Singh, NTNU, Alesund, Norway",
  "Kristina, Technical University of Varna, Bulgaria",
  "Tomas Sochor, Technical University of Ostrava, Czech Republic",
  "Eustrat Zhupa, University of Rochester, NY, USA",
  "Monika Polak, Rochester Institute of Technology, NY, USA",
  "Álvaro Rocha, University of Coimbra, Portugal",
];

const NATIONAL_ADVISORY = [
  "Virendra Singh, IIT Bombay, India",
  "Amitava Das, CSIR-CSMCRI, India",
  "Manu Pratap Singh, DBRAU Agra, India",
  "Sunil Kumar Muttoo, University of Delhi, India",
  "Vipin Tyagi, JUET Guna, India",
  "K. Lobiyal, JNU Delhi, India",
  "Sudeep Tanwar, Nirma University, India",
  "Neeta Nain, MNIT Jaipur, India",
  "Mukesh Kumar Sharma, TIT&S Bhiwani, India",
  "Sanjay Kumar Sharma, Banasthali Vidyapith, India",
];

export default function Advisory() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-slate-700 mb-6">
          Advisory Board
          <div className="w-24 h-1 bg-blue-900 mt-3 rounded-full"></div>
        </h1>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          International Advisory Board
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {INTERNATIONAL_ADVISORY.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          National Advisory Board
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {NATIONAL_ADVISORY.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}