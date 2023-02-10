import * as yup from "yup";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";



const SignIn = () => {

    let history = useNavigate();

    const validationSchema = yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
            if(data.email == "nenad.peric@outlook.com" && data.password == "12345678")
            {
                console.log("Bravo majstore");
                history('/')

            }else {
                console.log("Sjebo si nesto");
            }
          //Ovde pozovi API
          // iz data uzmi vrednosti za email i pass
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div> Email </div>
                <input
                    name="email"
                    type="email"
                    className={(formik.errors.email && formik.touched.email ? ' is-invalid' : '')}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <div className="invalid-feedback">{formik.errors.email && formik.touched.email ? formik.errors.email : null}</div>
            </div>

            <div>
                <div> Password </div>
                <input
                    name="password"
                    type="password"
                    className={(formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className="invalid-feedback">{formik.errors.password && formik.touched.password ? formik.errors.password : null}</div>
            </div>


            <div>
                <button type="submit">login</button>
            </div>

        </form>
    );
}

export default SignIn;