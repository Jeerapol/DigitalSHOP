import Link from "next/link";
import MaxWidthWarpper from "./MaxWidthWarpper";
import Image from "next/image";
import NavItems from "./NavItems";

const Navber = () => {
  return (
    <>
      <div className="bg-white sticky z-50 top-0 inset-0 h-16">
        <header className="relative bg-white">
          <MaxWidthWarpper>
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* TODO: Moblie nav */}

                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Image
                      src="https://via.placeholder.com/40x40"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="hidden   z-50 lg:ml-8 lg:block lg:self-stretch">
                  <NavItems />
                </div>
              </div>
            </div>
          </MaxWidthWarpper>
        </header>
      </div>
    </>
  );
};

export default Navber;
