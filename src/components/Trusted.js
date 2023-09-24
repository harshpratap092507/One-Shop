import React from 'react'
import styled from 'styled-components'
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://images.all-free-download.com/images/graphiclarge/colored_company_logos_creative_design_579470.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://graphicsfamily.com/wp-content/uploads/2020/10/Non-Profit-Company-Logo-Design-on-3d-glass-window-2048x1152.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.creativemarket.com/0.1.0/ps/6713806/3500/2330/m1/fpnw/wm0/logos-21-77-.jpg?1563702063&s=c25446499054f94d550e28c39b63e932"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.clipartkey.com/mpngs/m/297-2978068_transparent-create-your-own-clipart-online-free-company.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/392/153/original/modern-company-logo-design-vector.jpg"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted
