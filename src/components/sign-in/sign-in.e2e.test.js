import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {TEST_MOCKS} from "../../const";
import {MemoryRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user click SignIn`, () => {
  const handleSignIn = jest.fn();

  const wrapper = mount(
      <MemoryRouter>
        <SignIn
          rendered={TEST_MOCKS.rendered}
          filmsQuantity={TEST_MOCKS.filmsQuantity}
          onFormSubmit={handleSignIn}
        />
      </MemoryRouter>
  );

  wrapper.refs = {
    emailRef: {
      current: {
        value: `mario@mushroomhills.com`
      },
    }
  };

  const signInBtn = wrapper.find(`.sign-in__form`);
  signInBtn.simulate(`submit`, {preventDefault() {}});
  // TODO: явно оно не так должно работать :( Нет идей как передать нормально рефы через stackoverflow
  expect(handleSignIn).toHaveBeenCalledTimes(1);
});
