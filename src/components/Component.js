import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(157.07deg,_#3a3a3a,_#252525)] overflow-hidden text-left text-33xl text-gray-100 font-cooper-hewitt ${className}`}
    >
      <div className="absolute h-[100.61%] w-[105.83%] top-[0%] right-[-5.83%] bottom-[-0.61%] left-[0%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0.61%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-28761.svg"
        />
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[360px] object-cover mix-blend-multiply z-[1]"
          alt=""
          src="/noise@2x.png"
        />
      </div>
      <div className="absolute top-[352px] left-[-259px] w-[259px] flex flex-row items-start justify-start">
        <i className="w-[235px] relative uppercase inline-block font-extrabold [-webkit-text-stroke:1.7px_#595959]">
          SINGDAM
        </i>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 ml-[-235px] text-dimgray-100">
          <i className="self-stretch relative uppercase font-extrabold z-[1]">
            KIATMoo9
          </i>
        </div>
      </div>
      <div className="absolute top-[352px] left-[-211px] w-[211px] flex flex-row items-start justify-start">
        <i className="w-[193px] relative uppercase inline-block font-extrabold [-webkit-text-stroke:1.7px_#595959]">
          Takeru
        </i>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 ml-[-193px] text-dimgray-100">
          <i className="self-stretch relative uppercase font-extrabold z-[1]">
            Segawa
          </i>
        </div>
      </div>
      <div className="absolute top-[352px] left-[20px] flex flex-col items-start justify-start z-[2]">
        <i className="relative uppercase font-extrabold [-webkit-text-stroke:1.7px_#595959] shrink-0">
          Helena
        </i>
        <div className="h-14 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-dimgray-100">
          <i className="mt-[-12px] relative uppercase inline-block font-extrabold shrink-0">
            Padilla
          </i>
        </div>
      </div>
      <img
        className="absolute top-[193px] left-[117px] w-[235px] h-[315px] object-cover z-[3]"
        loading="lazy"
        alt=""
        src="/123388658-212962606869567-2973073532117539403-n-1@2x.png"
      />
      <img
        className="absolute top-[190px] left-[387px] w-[210px] h-[305px] object-cover"
        loading="lazy"
        alt=""
        src="/takerusegawa-12@2x.png"
      />
      <img
        className="absolute top-[175px] left-[355px] w-[175px] h-[323px] object-cover z-[2]"
        alt=""
        src="/singdam-kiatmoo9-12@2x.png"
      />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
