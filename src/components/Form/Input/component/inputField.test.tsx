import InputField from "./inputField";
import React, { useState as useStateMock } from "react";
import { screen, render, fireEvent, act } from "@testing-library/react"
import '@testing-library/jest-dom'


test("Validar se texto é digitado no onChange com componente", () =>{
    const myMock = jest.fn();
    const component = render(
        <InputField changeValue={myMock} id={'test'} placeholder={'test'} type={'text'} value={''}/>
    )

    const input = component.getByLabelText('test')

    
    fireEvent.input(input, {target: { value: "Matheus"}})
        
    expect(input).toHaveValue('Matheus')

    expect(myMock).toBeCalled()
    
})