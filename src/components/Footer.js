const Footer=()=> {
  return (
    <footer className="w-full bg-black text-gray-300 py-5 border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mt-1 text-sm opacity-70">
          © {new Date().getFullYear()} Paramm — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;