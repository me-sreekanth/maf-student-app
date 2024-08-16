import PropTypes from "prop-types";

const BackgroundOverlay = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 overflow-hidden ${className}`}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply z-10"
        alt="Background Noise"
        src="/noise@2x.png"
      />
      <div className="absolute top-[193px] left-[117px] w-[235px] h-[315px] z-20">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          alt="Helena Padilla"
          src="/123388658-212962606869567-2973073532117539403-n-1@2x.png"
        />
      </div>
      <div className="absolute top-[190px] left-[387px] w-[210px] h-[305px] z-10">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          alt="Takeru Segawa"
          src="/takerusegawa-12@2x.png"
        />
      </div>
      <div className="absolute top-[175px] left-[355px] w-[175px] h-[323px] z-5">
        <img
          className="w-full h-full object-cover"
          alt="Singdam Kiatmoo9"
          src="/singdam-kiatmoo9-12@2x.png"
        />
      </div>
      <div className="absolute top-[352px] left-[-211px] flex flex-row items-start justify-start z-20">
        <i className="relative uppercase font-extrabold [-webkit-text-stroke:1.7px_#595959] shrink-0">
          Helena
        </i>
        <div className="h-14 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-dimgray-100">
          <i className="mt-[-12px] relative uppercase inline-block font-extrabold shrink-0">
            Padilla
          </i>
        </div>
      </div>
    </div>
  );
};

BackgroundOverlay.propTypes = {
  className: PropTypes.string,
};

export default BackgroundOverlay;
