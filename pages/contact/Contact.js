import SetMetaData from '@/components/common/metaData/SetMetaData'
import Selector from '@/components/dropdown/CustomDropdown';
import TextInput from '@/components/inputs/TextInput'
import { contactUs } from '@/services/axios/apiServices/commomServices';
import { SwalService } from '@/services/swal/SwalServices';
import { Messages } from '@/utils/Message';
import { isValidForm } from '@/utils/validations/CommonValidator';
import moment from 'moment';
import Link from 'next/link'
import React, { useState } from 'react'

function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        pickup: "",
        drop: "",
        date: "",
        vehicle: "",
        passangers: "",
        message: "",
        subject: "Inquiry About Trip",
        toMail: "vstarcabservice@gmail.com",
    });

    //------------------------------------------------------- validation rules and state--------------------------------------

    const validationRules = {
        firstName: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "first Name "
                ),
            },
        ],
        lastName: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "last Name "
                ),
            },
        ],
        phoneNo: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace("{0}", "Phone Number"),
            },
            {
                type: "maxLength",
                maxLength: 10,
                message: 'Please enter 10 number value',
            },
            {
                type: "minLength",
                minLength: 10,
                message: 'Please enter 10 number value',
            },
            {
                type: "number",
                message: 'Please enter value in number',
            },
            {
                type: "space",
                message: 'Please remove space from mobile number',
            },
        ],
        email: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace("{0}", "Email"),
            },
            {
                type: "email",
                message: 'Please enter valid email',
            },
        ],
        pickup: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "pickup location"
                ),
            }
        ],
        drop: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "drop location"
                ),
            }
        ],
        date: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "date"
                ),
            }
        ],
        message: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "Message"
                ),
            },
        ],
        passangers: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "Passangers"
                ),
            },
        ],
        vehicle: [
            {
                type: "require",
                message: Messages.CommonValidationMessages.FieldRequired.replace(
                    "{0}",
                    "Passangers"
                ),
            },
        ]
    }

    const [formValidationState, setFormValidationState] = useState({
        isValid: true,
        error: {},
    });

    const validationForForm = () => {
        const newValidForm = isValidForm(
            formData,
            validationRules,
            formValidationState
        );
        setFormValidationState(newValidForm);
        return newValidForm.isValid;
    };

    //--------------------- handlers ---------------------------

    const handleChange = (e, key) => {
        setFormData((prev) => ({
            ...prev,
            [key]: e.target.value
        }));
    };

    const handleDropDownChange = (e, key) => {
        setFormData((prev) => ({
            ...prev,
            [key]: e.value
        }));
    }

    //----------------------------------- apis ------------------------------
    const sendToWhatsApp = () => {
        const phone = "919313834439";
        const message =
            `*New Booking Request – Vstar Cab Services*

*Name:* ${formData.firstName} ${formData.lastName}
*Phone:* ${formData.phoneNo}
*Email:* ${formData.email}

*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Date:* ${moment(formData.date).format('DD-MM-YYYY')}
*Vehicle:* ${formData.vehicle}
*Passengers:* ${formData.passangers}

*Message:* ${formData.message}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const contactus = () => {
        let validate = validationForForm()
        if (validate) {
            setLoading(true);
            contactUs(formData).then((res) => {
                if (res.statusCode === 200) {
                    SwalService.Success(res.Message);
                    sendToWhatsApp();
                    resetData();
                } else {
                    SwalService.Error(res.Message);
                }
                setLoading(false);
            })
        }
    }

    const resetData = () => {
        setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            pickup: "",
            drop: "",
            date: "",
            vehicle: "",
            passangers: "",
            message: "",
            subject: "",
            toMail: "vstarcabservice@gmail.com",
        });
    }

    const DETAILS = [
        { icon: 'fi fi-rr-phone-call', label: 'Phone', val: '+91 93138 34439' },
        { icon: 'fi fi-rr-envelope', label: 'Email Address', val: 'vstarcabservice@gmail.com' },
        { icon: 'fi fi-rr-land-layer-location', label: 'Office Location', val: 'Mansa, Gandhinagar, Gujarat' },
        { icon: 'fi fi-rr-clock-five', label: 'Working Hours', val: '24 / 7 – We Never Sleep' },
    ]

    const carOption = [
        { label: "Eeco", value: "Eeco" },
        { label: "Swift Dzire", value: "Swift Dzire" },
        { label: "Ertiga", value: "Ertiga" },
        { label: "Innova Crysta", value: "Innova Crysta" },
        { label: "Urbania", value: "Urbania" },
    ];

    return (
        <>
            <SetMetaData
                title="Contact | Book Taxi & Traveller"
                description="Contact Vstar Cab Services for quick cab booking, tempo traveller rental and tour taxi services. Call now for affordable and reliable travel solutions."
                keyword="contact Vstar Cab Services, book cab Ahmedabad, taxi contact Gandhinagar, tempo traveller booking Ahmedabad"
                canonicalUrl="https://www.vstarcabservices.com/contact"
                ogImage="https://www.vstarcabservices.com/og-contact.jpg"
            />
            <div className='contact-page'>
                <div
                    className="banner relative flex items-center overflow-hidden lg:py-24 max-lg:pt-[100px] max-lg:pb-[60px] max-md:pb-[40px]"
                    style={{
                        height: '480px',
                        background: `linear-gradient(105deg, rgba(247,245,241,.95) 35%, rgba(247,245,241,.6) 100%),
        url('/inner-banner.webp') center 70%/cover no-repeat`,
                    }}
                >
                    <div className='container'>
                        <div className='banner-inner max-w-[600px]'>
                            <h1
                                className="text-[#0E0E0D]"
                            >
                                Let’s Plan <span className='text-gold'>Your Next Journey</span>
                            </h1>
                            <p className='text-gray-600 mt-5 mb-[30px]'>
                                Contact Vstar Cab Services for cab booking, tempo traveller rental, and airport transfers. Call, WhatsApp, or fill out the form — we’ll respond promptly.
                            </p>
                            <Link
                                href="/service"
                                className="bg-[#0E0E0D] text-white !text-[16px] font-medium px-5 py-[10px] hover:bg-gold transition-all duration-300 hover:-translate-y-0.5 rounded-full"
                            >
                                Our Vehicles
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── CONTACT SECTION ── */}
                <div className="contact-info bg-white">
                    <div className='container'>
                        <div className="contact-info-inner lg:py-[80px] md:py-[60px] py-[40px]">
                            <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[40px] items-start" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
                                <div className='flex flex-col gap-[20px] md:gap-[25px] lg:gap-[30px] lg:w-[50%] w-full'>
                                    <h2 className="fade-up font-display font-black text-dark">
                                        We&apos;d Love to<br />Hear From You
                                    </h2>
                                    <p className="fade-up text-text-mid leading-[1.78]">
                                        Whether you&apos;re planning a group pilgrimage, corporate outing, or a simple family vacation — get in touch and we&apos;ll give you the best deal. We typically respond within 30 minutes.
                                    </p>
                                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                                        {DETAILS.map(d => (
                                            <div key={d.label} className="fade-up flex gap-4 items-start">
                                                <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                                                    <i className={`${d.icon} !text-[20px] !h-[20px] !leading-tight text-white`}></i>
                                                </div>
                                                <div>
                                                    <p className="!text-[12px] text-gold !font-medium uppercase">{d.label}</p>
                                                    <p className="text-dark !font-medium">{d.val}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="fade-up bg-gold/10 border border-gold/25 rounded-2xl p-6">
                                        <h4 className="text-[0.93rem] font-bold text-gold-dark mb-2">🌟 Quick Booking Tip</h4>
                                        <p className="text-text-mid text-[0.87rem] leading-[1.7]">
                                            For best availability, book at least 24 hours in advance. For same-day bookings, please call us directly — we&apos;ll do our best to accommodate you!
                                        </p>
                                    </div>
                                </div>

                                <div className="fade-up bg-white border border-border rounded-3xl lg:p-[30px] p-4 md:p-5 shadow lg:w-[50%] w-full flex flex-col gap-[10px] md:gap-[20px]">
                                    <div className='flex flex-col md:gap-[10px] gap-[5px]'>
                                        <h3 className="">Book a Ride or Get a Quote</h3>
                                        <p className="text-text-muted text-sm">Fill in the details and we&apos;ll get back to you with the best price.</p>
                                    </div>

                                    <div className='form-fields grid gri-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4'>
                                        <div className='input-grp'>
                                            <label>First Name</label>
                                            <TextInput
                                                type='text'
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleChange(e, 'firstName')}
                                                placeholder='Rajan'
                                                className={`${formValidationState.error.firstName ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Last Name</label>
                                            <TextInput
                                                type='text'
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleChange(e, 'lastName')}
                                                placeholder='Mehta'
                                                className={`${formValidationState.error.lastName ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Mobile No.</label>
                                            <TextInput
                                                type='number'
                                                id="phoneNo"
                                                name="phoneNo"
                                                value={formData.phoneNo}
                                                onChange={(e) => handleChange(e, 'phoneNo')}
                                                placeholder='98765 43210'
                                                className={`${formValidationState.error.phoneNo ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Email Address</label>
                                            <TextInput
                                                type='email'
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange(e, 'email')}
                                                placeholder='you@example.com'
                                                className={`${formValidationState.error.email ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Pickup Location</label>
                                            <TextInput
                                                type='text'
                                                id="pickup"
                                                name="pickup"
                                                value={formData.pickup}
                                                onChange={(e) => handleChange(e, 'pickup')}
                                                placeholder='Mansa'
                                                className={`${formValidationState.error.pickup ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Drop Location</label>
                                            <TextInput
                                                type='text'
                                                id="drop"
                                                name="drop"
                                                value={formData.drop}
                                                onChange={(e) => handleChange(e, 'drop')}
                                                placeholder='Visnagar'
                                                className={`${formValidationState.error.drop ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Travel Date</label>
                                            <TextInput
                                                type='date'
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={(e) => handleChange(e, 'date')}
                                                placeholder='2024-01-01'
                                                className={`${formValidationState.error.date ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp'>
                                            <label>Select Vehicle</label>
                                            <Selector
                                                options={carOption}
                                                value={
                                                    carOption?.find(
                                                        (opt) => opt.value === formData.vehicle
                                                    ) || null
                                                }
                                                onChange={(e) => handleDropDownChange(e, 'vehicle')}
                                                className={`${formValidationState.error.vehicle ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp md:col-span-2'>
                                            <label>Number of Passengers</label>
                                            <TextInput
                                                type='text'
                                                id="passangers"
                                                name="passangers"
                                                value={formData.passangers}
                                                onChange={(e) => handleChange(e, 'passangers')}
                                                placeholder='1–4 passengers'
                                                className={`${formValidationState.error.passangers ? 'error' : ''}`}
                                            />
                                        </div>
                                        <div className='input-grp md:col-span-2'>
                                            <label>Special Requirements / Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={(e) => handleChange(e, 'message')}
                                                rows={4}
                                                placeholder='Tell us about your trip, any special requirements, return journey details, etc.'
                                                className={`${formValidationState.error.message ? 'error' : ''}`}
                                            />
                                        </div>

                                    </div>
                                    <button
                                        onClick={() => contactus()}
                                        className="w-full bg-gold text-white border-none py-[10px] rounded-xl text-[16px] font-semibold tracking-wide hover:bg-gold-dark transition-colors"
                                    >
                                        {loading ? <i className="fi fi-rr-spinner animate-spin inline-block"></i> : 'Send My Booking Request'}
                                    </button>
                                    <p className="!text-[14px] text-text-muted text-center">We&apos;ll respond via WhatsApp or call within 30 minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map bg-[#FAFAF8] lg:py-[80px] md:py-[60px] py-[40px]">
                    <div className='container'>
                        <div className='map-inner flex flex-col gap-[20px]'>
                            <div className="map-head">
                                <h2 className="section-title fade-up">Our Location</h2>
                            </div>
                            <div className="rounded-2xl overflow-hidden h-[400px] border border-border shadow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29286.70122970603!2d72.63358931313701!3d23.43023099893803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c3384a48be187%3A0xae5341b030f4fabb!2sMansa%2C%20Gujarat%20382845!5e0!3m2!1sen!2sin!4v1772085235672!5m2!1sen!2sin"
                                    className=" w-full h-full"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Vstar Cab Service"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact