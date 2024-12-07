'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
// import { StoreContext } from '../../../store/store-context.js';
import { Icon } from '@iconify/react';
import api from '@/lib/userNextAxios';

function SendOtpWithEmailForm(props) {
  const { handleSendEmail, email, setEmail, loading } = props;
  const [emailError,setEmailError]=useState('')

  const validateEmail=(email)=>{
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email)
  }
  const handleEmailChange=(value)=>{
    setEmail(value);
    if(!validateEmail(value)){
      setEmailError("Please enter a valid email address")
    }else{
      setEmailError('')
    }
  }

  return (
    <form
      className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0"
      onSubmit={handleSendEmail}
    >
      <div className="mt-5 md:mt-0">
        <h3 className="text-center font-semibold text-xl mt-2">
          Forgot Password
        </h3>
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="otp" className="text-sm font-medium">
          Enter email
        </label>
        <input
          autoFocus
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>  handleEmailChange(e.target.value)}
          className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
        />
        {emailError&& <div className='text-red-500'>{emailError}</div>}
      </div>
      <button disabled={loading} className="btn-primary">
        {loading ? <span className="spinner"></span> : 'Send OTP'}
      </button>
    </form>
  );
}

function VerifyOtp(props) {
  const { handleVerify, otp, setOtp, loading } = props;
  return (
    <form
      className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0"
      onSubmit={handleVerify}
    >
      <div className="mt-5 md:mt-0">
        <h3 className="text-center font-semibold text-xl mt-2">Verify OTP</h3>
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="otp" className="text-sm font-medium">
          Enter OTP
        </label>
        <input
          autoFocus
          type="text"
          name="otp"
          id="otp"
          placeholder="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
        />
      </div>

      <button disabled={loading} className="btn-primary">
        {loading ? <span className="spinner"></span> : 'Verify OTP'}
      </button>
    </form>
  );
}

function NewPassword(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [touched, setTouched] = useState(false);
  const {
    handleChangePassword,
    password,
    setPassword,
    password2,
    setPassword2,
    loading,
  } = props;
  const samePassword = password === password2;
  return (
    <form
      className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0"
      onSubmit={handleChangePassword}
    >
      <div className="mt-5 md:mt-0">
        <h3 className="text-center font-semibold text-xl mt-2">
          Change Password
        </h3>
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="otp" className="text-sm font-medium">
          Enter New Password
        </label>
        <input
          autoFocus
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
        />
        <Icon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? 'mdi:eye' : 'mdi:eye-off'}
          className=" select-none text-zinc-500 absolute right-3 top-9 text-xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col relative">
        <label htmlFor="otp" className="text-sm font-medium">
          Confirm Password
        </label>
        <input
          autoFocus
          type={showPassword2 ? 'text' : 'password'}
          name="password2"
          id="password2"
          placeholder="password2"
          value={password2}
          onChange={(e) => {
            setTouched(true);
            setPassword2(e.target.value);
            console.log(password);
          }}
          className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
        />
        <Icon
          onClick={() => setShowPassword2(!showPassword2)}
          icon={showPassword2 ? 'mdi:eye' : 'mdi:eye-off'}
          className=" select-none text-zinc-500 absolute right-3 top-9 text-xl cursor-pointer"
        />
        {touched && !samePassword ? (
          <div className="text-red-500">Password not matched.</div>
        ) : null}
      </div>

      <button
        disabled={loading || !samePassword}
        className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
      >
        {loading ? <span className="spinner"></span> : 'Change Password'}
      </button>
    </form>
  );
}
export default function ResetPassword() {
  // const [state] = useContext(StoreContext);

  const [otp, setOtp] = useState('');
  const [otpKey, setOtpKey] = useState('');

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const router = useRouter();
  const [token, setToken] = useState('');

  const handleSendEmail = async (e) => {
    e.preventDefault();
    console.log('this is the one');

    try {
      setLoading(true);
      const { data } = await api.post(`/api/auth/resend-otp`, {
        email: email,
        type: 'newpassword',
      });
      console.log(data);
      if (data.status === 200) {
        setOtpKey(data.data.otp_key);
        toast.success(data.message);
      }
    } catch (error) {
      console.log(' error : \n', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await api.post(`/api/auth/verify-otp`, {
        email: email,
        otp_key: otpKey,
        otp: otp,
        type: 'newpassword',
      });
      console.log(data);
      if (data.status === 200) {
        toast.success(data.message);
        setVerified(true);
        // setToken(data.data.token);
      }
    } catch (error) {
      console.log('signup error : \n', error);
    } finally {
      setLoading(false);
    }
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post(
        '/api/auth/update-password',
        { email, newPassword: password, otp_key: otpKey, otp: otp },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (data.status === 200) {
        toast.success(data.message);
        router.push('/login');
      }
    } catch (error) {
      console.log(token);
      console.log('signup error : \n', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm w-screen md:w-full h-screen md:h-auto bg-white rounded-xl md:shadow-lg md:border">
        {!otpKey ? (
          <SendOtpWithEmailForm
            handleSendEmail={handleSendEmail}
            email={email}
            setEmail={setEmail}
            loading={loading}
          />
        ) : !verified ? (
          <VerifyOtp
            handleVerify={handleVerify}
            otp={otp}
            setOtp={setOtp}
            loading={loading}
          />
        ) : (
          <NewPassword
            handleChangePassword={handleChangePassword}
            password={password}
            setPassword={setPassword}
            password2={password2}
            setPassword2={setPassword2}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}
