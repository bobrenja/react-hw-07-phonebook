import MyPhoneBooks from './PhoneBooks/MyPhoneBooks'; 

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MyPhoneBooks />
    </div>
  );
};
