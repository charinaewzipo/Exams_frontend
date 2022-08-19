import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NumberFormat from "react-number-format";
import ReactSelect from "react-select";
import styled from "styled-components";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
  createMuiTheme,
  Slider,
} from "@material-ui/core";
import MuiAutoComplete from "./MuiAutoComplete";
<style>span {{ fontSize: "24px" }}</style>;
const Container = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
  position: relative;
`;
const Wrapper = styled.div``;
const Text = styled.span`
  font-size: 20px;
  margin: 0 5px;
`;
const Star = styled.p`
  color: red;
  margin: 0px 10px 0 0;
`;
const TopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
const SecondInfo = styled.div`
  display: flex;
`;
const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const NationalityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 30px;
`;
const CitizenContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const PassportContainer = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;
const SalaryContainer = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
`;
const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  position: absolute;
  bottom: 20%;
  right: 20%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #97c6fb;
  cursor: pointer;
`;
const FormContainer = styled.form``;
const Form = () => {
  const defaultValues = {
    Title: "Mr",
    Nationality: "",
    Gender: "",
    Salary: 0,
    country: { code: "TH", label: "Thailand", phone: "66" },
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
  });
  const [data, setData] = useState(null);
  const onSubmit = (user) => {
    setData(user);
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <TopInfo>
            <Text>Title</Text>
            <Star>*</Star>
            <Controller
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value={"Mr"}>Mr</MenuItem>
                  <MenuItem value={"Mrs"}>Mrs</MenuItem>
                </Select>
              )}
              name="Title"
              control={control}
            />

            <Text>FirstName</Text>
            <Star>*</Star>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  //required
                  id="outlined-basic"
                  label="first name"
                  variant="outlined"
                />
              )}
              name="FirstName"
              control={control}
            />

            <Text>LastName</Text>
            <Star>*</Star>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  //required
                  id="outlined-basic"
                  label="last name"
                  variant="outlined"
                />
              )}
              name="LastName"
              control={control}
            />
          </TopInfo>
          <SecondInfo>
            <BirthdayContainer>
              <Text>BirthDay</Text>
              <Star>*</Star>
              <Controller
                control={control}
                name="BirthDay"
                render={({ field }) => (
                  <ReactDatePicker
                    className="input"
                    //required
                    placeholderText="mm/dd/yy"
                    onChange={(e) => field.onChange(e)}
                    selected={field.value}
                    style={{
                      display: "flex",
                      padding: "50px",
                      backgroundColor: "red",
                    }}
                  />
                )}
              />
            </BirthdayContainer>
            <NationalityContainer>
              <Text>Nationality </Text>
              <Controller
                render={({ field }) => (
                  <Select {...field}>
                    <MenuItem value={"Thai"}>Thai</MenuItem>
                  </Select>
                )}
                name="Nationality"
                control={control}
              />
            </NationalityContainer>
          </SecondInfo>
          <CitizenContainer>
            <Text>CitizenID</Text>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-basic"
                  label="citizenid"
                  variant="outlined"
                />
              )}
              name="CitizenID"
              control={control}
            />
          </CitizenContainer>
          <GenderContainer>
            <Text>Gender :</Text>
            <Controller
              render={({ field }) => (
                <RadioGroup aria-label="gender" {...field} row>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />

                  <FormControlLabel
                    value="unisex"
                    control={<Radio />}
                    label="UniSex"
                  />
                </RadioGroup>
              )}
              name="Gender"
              control={control}
            />
          </GenderContainer>
          <OtherInfo>
            <MobileContainer>
              <Text>Mobile</Text>
              <Star>*</Star>
              <MuiAutoComplete control={control} />
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    //required
                    id="outlined-basic"
                    label="phone"
                    variant="outlined"
                  />
                )}
                name="Phone"
                control={control}
              />
            </MobileContainer>
            <PassportContainer>
              <Text>Passport No:</Text>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="passport"
                    variant="outlined"
                  />
                )}
                name="Passport"
                control={control}
              />
            </PassportContainer>
            <SalaryContainer>
              <Text>Expected Salary</Text>
              <Star>*</Star>
              <Controller
                render={({ field }) => (
                  <NumberFormat
                    thousandSeparator
                    //required
                    {...field}
                    id="outlined-basic"
                    variant="outlined"
                    style={{
                      display: "flex",
                      textAlign: "right",
                      padding: "15px",
                      borderRadius: "5px",
                      border: "1px solid gray",
                    }}
                  />
                )}
                name="Salary"
                className="input"
                control={control}
              />
              <Text>THB</Text>
            </SalaryContainer>
          </OtherInfo>

          <Button onClick={handleSubmit(onSubmit)}>SUBMIT</Button>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};
export default Form;
