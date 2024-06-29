
const FooterEmail = () => {
  return (
    <main>
      <form>
        <fieldset className='h-11 py-4 px-3 md:px-6 overflow-hidden rounded shadow-light-stroke flex flex-row justify-between items-center'>
          <legend className='sr-only'>Subscribe to our newsletter</legend>
          <label htmlFor="substance-input" className='sr-only'>Email address</label>
          <input
            id="substance-input"
            className="outline-0 bg-transparent text-left text-16sm text-lightgray font-inter placeholder:text-light placeholder:opacity-50 w-full"
            type="email"
            placeholder="user.example@gmail.com"
            required
          />
        </fieldset>
      </form>
    </main>
  );
}

export default FooterEmail;
