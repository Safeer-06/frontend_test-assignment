"use client";
import Image from "next/image";
import styles from "./mainpage.module.css";
import { useState } from "react";
import OperatorContainer from "../OperatorContainer";

export default function MainPage() {
  const [filterOpen, setFilterOpen] = useState(true);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1 className={styles.heading}>Ferry Operators</h1>
          <p className={styles.label}>
            Discover the{" "}
            <span className={styles.boldText}>57 ferry operators</span> we work
            with
          </p>
        </div>
        <div>
          <button className={styles.book_tickets_button}>
            <Image
              src="/right-arrow-icon.svg"
              width={16}
              height={25}
              alt="map"
            />
            <div className={styles.book_tickets_button_text}>
              Book Your Tickets
            </div>
          </button>
        </div>
      </div>

      <div className={styles.Buttons_Container}>
        <div className={styles.Filters_Container}>
          <div>
            <button
              className={styles.filter_button}
              onClick={() => {
                setFilterOpen(true);
              }}
            >
              <Image src="/filter-icon.svg" width={20} height={20} alt="map" />
              Filters
            </button>
          </div>
          <div>
            <button className={styles.sort_button_desktop}>
              <Image src={"/sortbutton.svg"} layout="fill" alt="map" />
            </button>
            <button className={styles.sort_button_mobile}>
              <Image src={"/sortbyreviews.svg"} layout="fill" alt="map" />
              </button>
          </div>
          <div>
            <button className={styles.search_button}>
              <Image src="/search.svg" layout="fill" alt="search" />
            </button>
          </div>
        </div>
        <div>
          <button className={styles.button}>
            <Image src="/map-icon.svg" width={20} height={20} alt="map" />
            <div className={styles.button_text}>Live Map View</div>
          </button>
        </div>
      </div>
      <div className={styles.filters_data_container}>
        {filterOpen ? (
          <div className={styles.filters_data}>
            <div className={styles.filter_header}>
              <div className={`${styles.filters_heading} ${styles.boldText}`}>
                Filters
              </div>
              <div
                onClick={() => {
                  setFilterOpen(false);
                }}
              >
                <Image src="/cross.svg" width={20} height={20} />
              </div>
            </div>
            <div className={`${styles.operatingfilters} ${styles.boldText}`}>
              <div>Operating in</div>
              <div
                style={{
                  position: "relative",
                  width: "310px",
                  height: "45px",
                  marginTop: "14px",
                }}
              >
                <Image src="/searchoperating.svg" layout="fill" />
              </div>
            </div>
            <div className={styles["divider"]} />
            <div className={`${styles.operatingfilters} ${styles.boldText}`}>
              <div>Ferry types</div>
              <div style={{ marginTop: "9px" }}>
                <Image src="/checkboxes.svg" width={187} height={52} />
              </div>
            </div>
          </div>
        ) : null}
        <div className={styles["data_list"]}>
          <OperatorContainer
            imageSrc="/blue-star-logo.svg"
            operatorName="Blue Star Ferries"
            ratingNumber={1.342}
            starsSrc={"/stars.png"}
            vesselNumber={8}
            ferryTypes={"8 normal"}
            popularVessels={"Blue Star Delos, Blue Star Nexos"}
            description={
              "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ..."
            }
          />
          <OperatorContainer
            imageSrc="/seajets.svg"
            operatorName="Seajets"
            ratingNumber={2.467}
            starsSrc={"/stars-two.png"}
            starsWidth={50}
            vesselNumber={17}
            ferryTypes={"10 normal and 7 high-speed ferries"}
            popularVessels={"World champion jet, seajet 2"}
            description={
              "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to pro- vide shipping services. The company's passenger ferries have been connecting over 26 destina- tions in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots. Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and ..."
            }
          />
          <OperatorContainer
            imageSrc="/superfast.svg"
            operatorName="Anek-Superfast"
            ratingNumber={667}
            starsSrc={"/stars-two.png"}
            starsWidth={50}
            vesselNumber={6}
            ferryTypes={"Normal Ferries"}
            isSuperfast
            popularVessels={"Superfast XII, superfast XI"}
            description={
              "Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology. The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and ..."
            }
          />
        </div>
      </div>
    </main>
  );
}
