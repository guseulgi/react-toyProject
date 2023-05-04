import { render, screen } from '@testing-library/react';
import HeaderTesting from './pages/HeaderTesting';
import JoinBtn from './pages/JoinBtn';
import MyPage from './pages/MyPage';

// test('isLogin 이 true 인 케이스에서 로그인 문구 변경 테스팅', () => {
//   render(<HeaderTesting isLogin={true} userID="Kim" />);
//   const txtElement = screen.getByText(/Kim 님 환영합니다./i);
//   expect(txtElement).toBeInTheDocument();
// });

// test('isLogin 이 false 인 케이스에서 로그인 문구 변경 테스팅', () => {
//   render(<HeaderTesting isLogin={false} />);
//   const txtElement = screen.getByText(/로그인을 해주세요./i);
//   const btnElemnet = screen.getByRole('button');
//   expect(txtElement).toBeInTheDocument();
//   expect(btnElemnet).toBeInTheDocument();
//   expect(btnElemnet).toHaveTextContent('로그인');
// });

// test('20세일 때', () => {
//   render(<JoinBtn age={20} />);

//   const textEl = screen.getByText(/회원 가입이 가능/i);
//   const btnEl = screen.getByRole('button');

//   expect(textEl).toBeInTheDocument();
//   expect(btnEl).toBeInTheDocument();
//   expect(btnEl).toBeDisabled();
//   expect(btnEl).toHaveStyle({
//     backgroundColor: 'blue',
//   });
// });

// test('13세일 때', () => {
//   render(<JoinBtn age={13} />);

//   const textEl = screen.getByText(/회원 가입이 불가능/i);
//   const btnEl = screen.getByRole('button');

//   expect(textEl).toBeInTheDocument();
//   expect(btnEl).toBeInTheDocument();
//   expect(btnEl).toBeEnabled();
//   expect(btnEl).toHaveStyle({
//     backgroundColor: 'red',
//   });
// });

test('사용자 데이터 받아오기 테스팅', () => {
  render(<MyPage name="Kim" id="kim" />);

  const textEl = screen.getByText(/Kim 님 환영합니다/i);
  expect(textEl).toBeInTheDocument();
});

test('사용자 데이터 받아오지 못하는 경우 테스팅', () => {
  render(<MyPage />);

  const textEl = screen.getByText(
    /사용자 데이터를 제대로 받아오지 못하였습니다/i,
  );
  expect(textEl).toBeInTheDocument();
});
