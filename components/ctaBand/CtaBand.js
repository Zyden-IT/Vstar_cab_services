import React from 'react'

const CtaBand = ({ title, subtitle, btnText, onClick }) => (
    <div className="relative overflow-hidden px-15 py-20"
        style={{
            background: 'linear-gradient(120deg, #C07808 0%, #E8960F 55%, #F5B93B 100%)',
            padding: '76px 60px',
        }}>
        <div className="absolute -top-[40%] -right-[8%] w-[480px] h-[480px] rounded-full bg-white/[0.08]" />
        <div className="flex justify-between items-center max-w-[1200px] mx-auto relative z-10 flex-wrap gap-8">
            <div>
                <h2 className="font-display font-black text-[2.3rem] text-white leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-white/75 mt-2 text-base">{subtitle}</p>
            </div>
            <button onClick={onClick} className="btn-dark">{btnText}</button>
        </div>
    </div>
)

export default CtaBand
