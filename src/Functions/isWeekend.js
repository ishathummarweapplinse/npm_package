export const isWeekend = (date) => {
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) throw new Error('Invalid date');
      const day = d.getDay();
      return day === 0 || day === 6;
    } catch (error) {
        console.log(error);
        
      return false;
    }
  };