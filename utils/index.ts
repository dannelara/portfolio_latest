const twb = (baseClassName: string, extraClassNames: string[]) => {
    let result = "";
  
    for (let i = 0; i < extraClassNames.length; i++) {
      result += `${baseClassName}-${extraClassNames[i]} `;
    }
  
    return result.trim();
  };
  
export default twb;
