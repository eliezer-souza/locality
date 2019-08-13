const sizeObj = {
  height: {
    small: '24px',
    normal: '32px',
    large: '40px',
  },
  width: {
    small: '60px',
    normal: '100px',
    large: '150px',
  },
  font: {
    small: '14px',
    normal: '14px',
    large: '18px',
  },
};

export const width = ({ size }) => sizeObj.width[size];
export const height = ({ size }) => sizeObj.height[size];
export const fontSize = ({ size }) => sizeObj.font[size];
