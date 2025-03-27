export default function Contacts() {
  return (
    <section className="  flex flex-col justify-center p-6 mt-20">
      <div className="bg-slate-900 p-6 text-white rounded-lg">
        <h1 className="text-2xl py-2 font-bold">Reach out to us</h1>
        <p className="py-1">Have any  inquiries?</p>
      </div>
      <div className="flex flex-col  md:flex md:flex-row md:justify-between py-5 mt-4 ">
        <div className="p-1">
          <p className="text-primary text-3xl font-bold my-2">Get in Touch</p>
          <iframe className="w-full  md:w-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.80072254987925!2d36.13723466610843!3d-0.27119800477468703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298d90cf610bef%3A0xf2f21833bc7cc21a!2sNakuru!5e0!3m2!1sen!2ske!4v1743100342325!5m2!1sen!2ske" width="500" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex flex-col p-5">
          <div className="text-slate-500">
            <p className="text-2xl underline underline-offset-1">Jafrana Construction Company</p>
            <p className="">
                It is a construction
                company that specializes in building residential
                and commercial buildings. We have been in the construction
                industry for over 10 years and have built a reputation for
                quality workmanship and excellent customer service.
              </p>
          </div>
          <div className="mt-4 text-slate-500">
            <p className="text-2xl underline">Contacts</p>
            <p className="text-center">Jafrana Construction Company</p>
            <p className="text-center">P.O. Box 12780</p>
            <p className="text-center">Nakuru, Kenya</p>
            <p className="text-center">Tel: 0722553222</p>
            <p className="text-center">Email:maishwanyeki4@gmail.com</p>
            <p className="text-center">Location:Nakuru-Dundori Road, next to Rohi building.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
