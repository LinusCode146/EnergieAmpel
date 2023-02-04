import Card from "../components/Card";
import Cardgrid from "../components/Cardgrid";
import { useEffect, useState } from "react";
import { getCurrentEngergy } from "../helpers/api-util";

export default function Home(props) {
  console.log(props)
  const erneuerbar = props.renewables[0].portion_of_renewables
  const [card, setCard] = useState();
  const grey = "gray";
  const colors = ["red", "#8B8000", "green"];
  useEffect(() => {
    if(erneuerbar > 0.40) setCard(3);
    else if(erneuerbar > 0.25) setCard(2);
    else setCard(1);
  }, [props]);
  
  return (
    <>
      <Cardgrid>
        {card == 1 && (
          <>
            <Card
              title={"Rote Ampel"}
              description={'Wenige erneuerbare Energien'}
              color={colors[card - 1]}
            />
            <Card
              title={"Gelbe Ampel"}
              description={"Besser als rote Ampel"}
              color={grey}
            />
            <Card
              title={"Grüne Ampel"}
              description={"Jetzt ist der perfekt Zeitpunk zum duschen"}
              color={grey}
            />
          </>
        )}
        {card == 2 && (
          <>
            <Card
              title={"Rote Ampel"}
              description={"So wenig Wasserverbrauch wie möglich"}
              color={grey}
            />
            <Card
              title={"Gelbe Ampel"}
              description={"Besser als rote Ampel"}
              color={colors[card - 1]}
            />
            <Card
              title={"Grüne Ampel"}
              description={"Jetzt ist der perfekt Zeitpunk zum duschen"}
              color={grey}
            />
          </>
        )}
        {card == 3 && (
          <>
            <Card
              title={"Rote Ampel"}
              description={"So wenig Wasserverbrauch wie möglich"}
              color={grey}
            />
            <Card
              title={"Gelbe Ampel"}
              description={"Besser als rote Ampel"}
              color={grey}
            />
            <Card
              title={"Grüne Ampel"}
              description={"Jetzt ist der perfekt Zeitpunk zum duschen"}
              color={colors[card - 1]}
            />
          </>
        )}
      </Cardgrid>

      <script
          async={true}
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
          async={true}
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getCurrentEngergy();
  console.log(projects)
  return {
    props: {
      renewables: projects,
    },
    revalidate: 2,
  };
}

