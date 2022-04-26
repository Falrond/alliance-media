import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { StyledServicesSection } from "../../atoms/Services/StyledServicesSection";
import { StyledServicesWrapper } from "../../atoms/Services/StyledServicesWrapper";
import { StyledText } from "../../atoms/Text/StyledText";
import { StyledBoxesWrapper } from "../../atoms/Services/StyledBoxesWrapper";
import { StyledBox } from "../../atoms/Services/StyledBox";
import { StyledSubpointWraper } from "../../atoms/Services/StyledSubpointWrapper";
import { MdWebAsset } from "@react-icons/all-files/md/MdWebAsset";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck";
import { BsBrush } from "@react-icons/all-files/bs/BsBrush";
import { BiStore } from "@react-icons/all-files/bi/BiStore";
import { scrollAnimation } from "../../../assets/animations/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Services = React.forwardRef((props, ref) => {
  const headerSliderSection = useRef(null);
  const section = useRef(null);
  const wrapper = useRef(null);
  console.log(ref);
  useEffect(() => {
    // const sectionRef = section.current;
    const animateWrapper = wrapper.current;
    const servicesRef = ref.current;
    scrollAnimation(animateWrapper, servicesRef, "20%", "bottom");
  }, []);

  return (
    <StyledServicesSection ref={ref}>
      <StyledServicesWrapper ref={wrapper}>
        <StyledText
          as="h2"
          hasdeclaredfontsize="44px"
          hasdeclaredfontweight="700"
          hasdeclaredtextalign="center"
          hasdeclaredmargin="0 0 80px 0"
        >
          Cennik
        </StyledText>
        <StyledBoxesWrapper>
          <StyledBox>
            <FiEdit size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Projekt Logo
            </StyledText>
            <StyledText
              as="div"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
              hasdeclaredmargin="0 0 25px 0"
            >
              już od{" "}
              <StyledText
                hasdeclareddisplay="inline-block"
                hasdeclaredfontcolor="#ffc730"
                hasdeclaredfontsize="28px"
                hasdeclaredfontweight="500"
                hasdeclaredpadding="0 5px 0 0"
              >
                950
              </StyledText>
              PLN
            </StyledText>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                2 wstępne projekty
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                4 modyfikacje wybranego projektu
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Nielimitowane poprawki wybranego projektu
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Logo w plikach PDF, PNG, JPEG
              </StyledText>
            </StyledSubpointWraper>
          </StyledBox>
          <StyledBox>
            <BsBrush size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Identyfikacja wizualna
            </StyledText>
            <StyledText
              as="div"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
              hasdeclaredmargin="0 0 25px 0"
            >
              już od{" "}
              <StyledText
                hasdeclareddisplay="inline-block"
                hasdeclaredfontcolor="#ffc730"
                hasdeclaredfontsize="28px"
                hasdeclaredfontweight="500"
                hasdeclaredpadding="0 5px 0 0"
              >
                1500
              </StyledText>
              PLN
            </StyledText>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                typografia, kolorystyka
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                szata materiałów drukowanych firmy
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                szablon grafik mediów społecznościowych
              </StyledText>
            </StyledSubpointWraper>
          </StyledBox>
          <StyledBox>
            <MdWebAsset size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Strona Wizytówka
            </StyledText>
            <StyledText
              as="div"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
              hasdeclaredmargin="0 0 25px 0"
            >
              już od{" "}
              <StyledText
                hasdeclareddisplay="inline-block"
                hasdeclaredfontcolor="#ffc730"
                hasdeclaredfontsize="28px"
                hasdeclaredfontweight="500"
                hasdeclaredpadding="0 5px 0 0"
              >
                3500
              </StyledText>
              PLN
            </StyledText>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                1 podstrona
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Indywidualny projekt str. głównej + 2 modyfikacje
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Czas pracy projektanta do 40 godz.
              </StyledText>
            </StyledSubpointWraper>
          </StyledBox>
          <StyledBox>
            <BiStore size={50} />
            <StyledText
              hasdeclaredtextalign="center"
              hasdeclaredfontsize="24px"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="12px 1.6rem"
              hasdeclaredfontweight="700"
            >
              Sklep internetowy
            </StyledText>
            <StyledText
              as="div"
              hasdeclaredfontsize="16px"
              hasdeclaredfontweight="500"
              hasdeclaredlineheight="1.6"
              hasdeclaredpadding="0 1.6rem"
              hasdeclaredletterspacing="0.3px"
              hasdeclaredmargin="0 0 25px 0"
            >
              już od{" "}
              <StyledText
                hasdeclareddisplay="inline-block"
                hasdeclaredfontcolor="#ffc730"
                hasdeclaredfontsize="28px"
                hasdeclaredfontweight="500"
                hasdeclaredpadding="0 5px 0 0"
              >
                5000
              </StyledText>
              PLN
            </StyledText>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Indywidualny projekt str. głównej
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                4 modyfikacje wybranego projektu
              </StyledText>
            </StyledSubpointWraper>
            <StyledSubpointWraper>
              <AiOutlineCheck size={20} color={"#ffc730"} fontWeight={"bold"} />
              <StyledText hasdeclaredmargin="0 0 0 10px">
                {" "}
                Czas pracy projektanta do 80 godz.
              </StyledText>
            </StyledSubpointWraper>
          </StyledBox>
        </StyledBoxesWrapper>
      </StyledServicesWrapper>
    </StyledServicesSection>
  );
});

export default Services;
