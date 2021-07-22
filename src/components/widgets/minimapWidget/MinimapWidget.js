import "./_minimapWidget.scss";
import LayersRoundedIcon from "@material-ui/icons/LayersRounded";

const MinimapWidget = () => {
  const imgTempUrl =
    "https://www.google.ru/maps/vt/pb=!1m5!1m4!1i10!2i1613!3i679!4i128!2m2!1e1!3i904!3m9!2sru!3sru!5e1105!12m1!1e4!12m1!1e47!12m1!1e3!4e0!5m2!1e0!5f2!23i10203575!23i1381938!23i1371340!23i1381033!23i1368782!23i1368785!23i1385853!23i46990830!23i1375050!23i4536287";
  return (
    <div className="minimap">
      <img src={imgTempUrl} alt="" />
      <div className="minimap__label">
          <LayersRoundedIcon fontSize="small"/>
          <label>Слои</label>
      </div>
    </div>
  );
};

export default MinimapWidget;
