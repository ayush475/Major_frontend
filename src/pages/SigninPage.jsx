import React, { useState } from 'react';

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        let errors = {};
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        setFormErrors(errors);
        
        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            // Logic to handle sign-in (e.g., send formData to backend)
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <div className="flex flex-col items-center justify-center mb-4">
                <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
                <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-2">
                    <img src="../src/assets/image1.jpg" alt="User Avatar" className="w-full h-full object-cover" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required />
                    {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
                </div>
                <div className="relative">
                    <label className="block mb-1">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                    {/* Show password icon */}
                    <div className="absolute top-10 right-0 flex items-center pr-3">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-500 focus:outline-none"
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5v.01M9 12h.01M9 18h.01M15 5v.01M15 12h.01M15 18h.01M5 10h.01M5 14h.01"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.707 4.293a2 2 0 00-2.828 0L12 9.172 6.121 4.293a2 2 0 00-2.828 2.828L12 14.828l10.707-10.707a2 2 0 10-2.828-2.828z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    {formErrors.password && <p className="text-red-500 text-xs italic">{formErrors.password}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Sign In</button>
            </form>
        </div>
    );
};

export default SigninForm;
