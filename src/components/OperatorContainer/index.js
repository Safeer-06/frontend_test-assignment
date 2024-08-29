"use client";
import styles from "./container.module.css";
import Image from "next/image";

export default function OperatorContainer({
  vesselNumber,
  starsWidth,
  starsSrc,
  operatorName,
  imageSrc,
  ratingNumber,
  ferryTypes,
  isSuperfast,
  popularVessels,
  description,
}) {
  return (
    <div className={styles["data_item"]}>
      <div className={styles["item_header"]}>
        <div>
          <div className={styles["item_logo"]}>
            <Image src={imageSrc || "/blue-star-logo.svg"} layout="fill" />
          </div>
        </div>
        <div className={styles["item_info_rating"]}>
          <div className={styles["item_name"]}>{operatorName || "-"}</div>
          <div className={styles["item_rating"]}>
            <Image
              src={starsSrc || "/stars.png"}
              width={starsWidth || 90}
              height={20}
            />
            {"  "}
            <div
              style={{
                fontSize: "18px",
                color: "#252525",
              }}
            >
              by {ratingNumber || 0} customers
            </div>
          </div>
        </div>
      </div>
      <div className={styles["sections_container"]}>
        <div className={styles["sections"]}>
          <div
            style={{
              fontSize: "17px",
              color: "#252525",
              fontWeight: "bold",
            }}
          >
            Operates in
          </div>
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginTop: "2px",
            }}
          >
            {isSuperfast ? (
              <>
                <Image src="/greece-flag.svg" width={25} height={14} />
                <div>Greece</div>,
                <Image src="/italy-flag.svg" width={25} height={14} />
                <div>Italy</div>
              </>
            ) : (
              <>
                <Image src="/greece-flag.svg" width={25} height={14} />
                <div>Greece</div>
              </>
            )}
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "#252525",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Vessels number:
            <span
              style={{
                fontWeight: "normal",
              }}
            >
              {vesselNumber || 0}
            </span>
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "#252525",
              fontWeight: "bold",
              marginTop: "2px",
            }}
          >
            Ferry Types:{" "}
            <span
              style={{
                fontWeight: "normal",
              }}
            >
              {ferryTypes || "-"}
            </span>
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "#252525",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Popular Vessels:
          </div>
          <div
            style={{
              color: "#00AFD4",
            }}
          >
            {popularVessels || "-"}
          </div>
        </div>
        <div className={styles["sections"]}>
          <div className={styles["description"]}>{description || "-"}</div>
          <div className={styles["divider"]} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "25px",
          gap: "17px",
        }}
      >
        <div
          style={{
            color: "#00AFD4",
            fontSize: "20px",
          }}
        >
          More about {operatorName || "-"}
        </div>
        <div>
          <Image src="/right-arrow.png" width={23} height={23} />
        </div>
      </div>
    </div>
  );
}
