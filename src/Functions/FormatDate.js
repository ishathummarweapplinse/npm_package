export const formatDate = (date, format = 'DD MMM YYYY') => {
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) throw new Error('Invalid date');
  
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const shortMonthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
      ];
      const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const minDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
      const hours = d.getHours();
      const hours12 = hours % 12 || 12; // 12-hour format
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const ampmLower = ampm.toLowerCase();
  
      const tzOffset = d.getTimezoneOffset();
      const tzHours = Math.abs(Math.floor(tzOffset / 60));
      const tzMinutes = Math.abs(tzOffset % 60);
      const tzSign = tzOffset <= 0 ? '+' : '-';
      const tzString = `${tzSign}${String(tzHours).padStart(2, '0')}:${String(tzMinutes).padStart(2, '0')}`;
      const tzStringNoColon = `${tzSign}${String(tzHours).padStart(2, '0')}${String(tzMinutes).padStart(2, '0')}`;
  
      const formatMappings = {
        'LT': 'h:mm A',
        'LTS': 'h:mm:ss A',
        'L': 'MM/DD/YYYY',
        'LL': 'MMMM D, YYYY',
        'LLL': 'MMMM D, YYYY h:mm A',
        'LLLL': 'dddd, MMMM D, YYYY h:mm A',
        'l': 'M/D/YYYY',
        'll': 'MMM D, YYYY',
        'lll': 'MMM D, YYYY h:mm A',
        'llll': 'ddd, MMM D, YYYY h:mm A',
      };
  
      const formatString = formatMappings[format] || format;
  
      const tokenMap = {
        'YYYY': String(d.getFullYear()),
        'YY': String(d.getFullYear()).slice(-2),
        'MMMM': monthNames[d.getMonth()],
        'MMM': shortMonthNames[d.getMonth()],
        'MM': String(d.getMonth() + 1).padStart(2, '0'),
        'M': String(d.getMonth() + 1),
        'DD': String(d.getDate()).padStart(2, '0'),
        'D': String(d.getDate()),
        'dddd': dayNames[d.getDay()],
        'ddd': shortDayNames[d.getDay()],
        'dd': minDayNames[d.getDay()],
        'd': String(d.getDay()),
        'HH': String(d.getHours()).padStart(2, '0'),
        'H': String(d.getHours()),
        'hh': String(hours12).padStart(2, '0'),
        'h': String(hours12),
        'mm': String(d.getMinutes()).padStart(2, '0'),
        'm': String(d.getMinutes()),
        'ss': String(d.getSeconds()).padStart(2, '0'),
        's': String(d.getSeconds()),
        'SSS': String(d.getMilliseconds()).padStart(3, '0'),
        'Z': tzString,
        'ZZ': tzStringNoColon,
        'A': ampm,
        'a': ampmLower,
      };
  
      // Match full tokens only
      return formatString.replace(/YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|Z|ZZ|A|a/g, (match) => tokenMap[match]);
  
    } catch (error) {
      return 'Invalid Date';
    }
  };