import react from 'react';
import { Link } from "react-router-dom";

function Accommodation() {
  return (
    <section className="bg-trustnet-bg py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Accommodation
          <div className="w-24 h-1 bg-trustnet-primary mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="bg-white rounded-2xl shadow-lg border border-trustnet-bg-light p-8 md:p-12 space-y-8">

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            Participants will be accommodated in the University GHS Hostel
            (subject to availability) and in nearby hotels. Accommodation
            arrangements will be facilitated by the organizing committee;
            however, the accommodation charges will be borne by the participants
            themselves. Some of the available options are listed below.
          </p>

          {/* Accommodation Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left text-gray-700">
              <thead className="bg-trustnet-bg-light">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Address</th>
                  <th className="p-3 border">Contact Details</th>
                  <th className="p-3 border">Distance</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 border font-medium">
                    GHS Hostel <br />
                    <span className="text-xs italic">(Subject to availability)</span>
                  </td>
                  <td className="p-3 border">
                    Manipal University Road, Dehmi Kalan, Rajasthan 303007
                  </td>
                  <td className="p-3 border">—</td>
                  <td className="p-3 border">2 km</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">
                    Hotel Highway King
                  </td>
                  <td className="p-3 border">Manipal University Road, Dehmi Kalan, Rajasthan 303007</td>
                  <td className="p-3 border">—</td>
                  <td className="p-3 border">2 km</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">
                    Bhanwar Singh Palace, Jaipur
                  </td>
                  <td className="p-3 border">
                    NH-8, Ajmer–Jaipur Expressway, Opposite Solitaire Park,
                    Bagru, Rajasthan 303007
                  </td>
                  <td className="p-3 border">
                    Phone: 0141-2955123 <br />
                    Mobile: +91 89059 89501 / 513 / 508 <br />
                    Email: booking@bspjaipur.com
                  </td>
                  <td className="p-3 border">2 km</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">
                    S K Guest House
                  </td>
                  <td className="p-3 border">
                    Manipal University Road, next to Hotel Highway King,
                    Dehmi Kalan, Jaipur, Rajasthan 303007
                  </td>
                  <td className="p-3 border">
                    Phone: 077270 78078
                  </td>
                  <td className="p-3 border">1.4 km</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">
                    Hotel Highway INN
                  </td>
                  <td className="p-3 border">
                    NH-8, Ajmer Road, Bagru, Dehmi Kalan, Rajasthan 303007
                  </td>
                  <td className="p-3 border">
                    Phone: 099297 35413
                  </td>
                  <td className="p-3 border">2 km</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">
                    Sterling Atharva Jaipur
                  </td>
                  <td className="p-3 border">
                    Himmatpura, Bad ke Balaji Road, Rajasthan 303007
                  </td>
                  <td className="p-3 border">
                    Phone: 08094 009281
                  </td>
                  <td className="p-3 border">8 km</td>
                </tr>

                <tr>
                  <td className="p-3 border font-medium">
                    Hotel The Sawai
                  </td>
                  <td className="p-3 border">
                    Jaipur–Ajmer Highway, Opposite Pink Pearl Water Park,
                    Jaipur, Rajasthan 302026
                  </td>
                  <td className="p-3 border">
                    Phone: 098290 49024, 0141-2943745 <br />
                    Email: hotelthesawai@gmail.com
                  </td>
                  <td className="p-3 border">13 km</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-3 border font-medium">
                    Hotel Highway Pride
                  </td>
                  <td className="p-3 border">
                    Near Toll Plaza, Balmukandpura (Nada),
                    Ajmer Road, Jaipur, Rajasthan 302042
                  </td>
                  <td className="p-3 border">—</td>
                  <td className="p-3 border">10 km</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Accommodation;
