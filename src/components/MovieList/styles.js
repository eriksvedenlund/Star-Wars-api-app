export const styles = () => ({
  container: {
    width: '50%',
    borderRight: '1px solid #EEE',
  },
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#EEE',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: '#FAFAFA',
      '&:hover': {
        backgroundColor: '#EEE',
      },
    },
  },
});