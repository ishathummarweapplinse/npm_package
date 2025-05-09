export const addDays = (date, days) => {
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) throw new Error('Invalid date');
      d.setDate(d.getDate() + days);
      return d;
    } catch (error) {
        console.log(error);
        
      return null;
    }
  };