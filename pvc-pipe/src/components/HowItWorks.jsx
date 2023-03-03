import React from "react";
import find from "../assets/icons/find.svg";
import request from "../assets/icons/request.svg";
import confirm from "../assets/icons/confirm.svg";

const HowItWorks = () => {
  return (
    <div className="h-auto w-full bg-almostWhite px-20 py-10">
      <div className="py-15 mb-8 text-center text-4xl font-semibold custom-underline">
        How &nbsp;
        <span className="text-primary  decoration-4">it works</span>
      </div>

      <div className="mr-4 grid content-between justify-items-center sm:grid-cols-1  lg:grid-cols-3 md:grid-cols-2 ">
        <div className="grid place-items-center text-center ">
          <img
            src={find}
            className="mb-1 h-10 w-10 rounded bg-iconFindColor p-3 font-bold"
          />
          <div className=" mb-4 font-semibold text-greyText">Find PVC</div>
          <div className="mb-4 text-sm">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
        <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={request}
            className="mb-1 h-10 w-10 rounded bg-iconRequestColor p-3 font-bold"
          />
          <div className=" mb-4 font-semibold text-greyText">Request</div>
          <div className="mb-4 text-sm">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
        <div className="grid place-items-center text-center sm:grid-cols-1 ">
          <img
            src={confirm}
            className="mb-1 h-10 w-10 rounded bg-iconDeliveryColor p-3 font-bold"
          />
          <div className=" mb-4 font-semibold text-greyText">
            Confirm Delivery
          </div>
          <div className="mb-4 text-sm">
            We Investing in reliability through testing, quality control, and
            maintenance to ensures our customer satisfaction.
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HowItWorks;
