import { MenuIcon, SearchIcon } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const productCards = [
  {
    id: 1,
    badge: "PUMA SPEEDCAT",
    discount: "UP to 20% OFF",
    backgroundImage: "/group-235.png",
    productImage: "/untitled-design--25--1.png",
    logoImage: "/-x30-x-modul-lib-x5f-desktop.png",
    position: { top: "top-[379px]", left: "left-[131px]" },
    productImageStyle: {
      top: "top-[94px]",
      left: "left-[140px]",
      width: "w-[234px]",
      height: "h-[140px]",
    },
    logoStyle: {
      width: "w-[43.83%]",
      height: "h-[30.19%]",
      top: "top-[35.67%]",
      left: "left-[10.83%]",
    },
  },
  {
    id: 2,
    badge: "JORDAN 11",
    discount: "UP to 15% OFF",
    backgroundImage: "/group-236.png",
    productImage: "/untitled-design--26--1.png",
    logoImage: "/logo-svg.svg",
    position: { top: "top-[379px]", left: "left-[561px]" },
    productImageStyle: {
      top: "top-[99px]",
      left: "left-[148px]",
      width: "w-[220px]",
      height: "h-[117px]",
    },
    logoStyle: {
      top: "top-20",
      left: "left-[37px]",
      width: "w-[195px]",
      height: "h-[124px]",
    },
  },
  {
    id: 3,
    badge: "GEL-ROCKET 12",
    discount: "UP to 30% OFF",
    backgroundImage: "/group-237.png",
    logoImage: "/group.png",
    position: { top: "top-[716px]", left: "left-[132px]" },
    logoStyle: {
      width: "w-[43.83%]",
      height: "h-[20.25%]",
      top: "top-[45.49%]",
      left: "left-[10.58%]",
    },
  },
  {
    id: 4,
    badge: "Nike Air Force 1 '07",
    discount: "UP to 10% OFF",
    backgroundImage: "/group-250.png",
    logoImage: "/vector.svg",
    position: { top: "top-[716px]", left: "left-[558px]" },
    contentPosition: { top: "top-[752px]", left: "left-[609px]" },
    logoStyle: {
      width: "w-[85.71%]",
      height: "h-[28.08%]",
      top: "top-[47.29%]",
      left: "left-0",
    },
  },
];

const socialIcons = [
  { src: "/social-icons-1.svg", alt: "Social icon 1", position: "left-2" },
  { src: "/social-icons-2.svg", alt: "Social icon 2", position: "left-16" },
  { src: "/social-icons.svg", alt: "Social icon 3", position: "left-[120px]" },
];

const footerImages = [
  {
    src: "/mask-group.png",
    alt: "Mask group",
    width: "w-[213px]",
    height: "h-[267px]",
    left: "left-[1226px]",
  },
  {
    src: "/mask-group-1.png",
    alt: "Mask group",
    width: "w-[152px]",
    height: "h-[190px]",
    left: "left-[1288px]",
  },
  {
    src: "/mask-group-2.png",
    alt: "Mask group",
    width: "w-[94px]",
    height: "h-[117px]",
    left: "left-[1346px]",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full min-w-[1440px] min-h-[1713px] relative">
      <div className="absolute top-[90px] left-0 w-[1440px] h-[1250px]">
        <img
          className="absolute top-[-7px] left-0 w-[1440px] h-[1272px]"
          alt="Gradient"
          src="/gradient.png"
        />
        <div className="absolute top-0 left-0 w-[1440px] h-[1250px] bg-[#00000045]" />
      </div>

      <footer className="absolute top-[1340px] -left-px w-[1440px] h-[373px] bg-[#124566] shadow-[0px_-4px_4px_#00000040]" />

      <header className="absolute top-0 left-0 w-[1440px] h-[90px] bg-[#114466] shadow-[0px_4px_4px_#00000040]">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[22px] left-[60px]"
        >
          <MenuIcon className="w-6 h-6 text-white" />
        </Button>

        <img
          className="absolute top-[22px] left-[116px] w-14 h-14"
          alt="Logo"
          src="/group-245.png"
        />

        <h1 className="absolute top-[38px] left-[375px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff] text-[35px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
          SOLE SOURCE
        </h1>

        <div className="absolute top-[22px] left-[811px] w-[507px] h-12">
          <div className="relative w-full h-full">
            <Input
              type="search"
              placeholder="SearchIcon Products..."
              className="w-full h-full bg-[#ffffff] rounded-[10px] shadow-[0px_4px_4px_#00000040] pl-12 pr-4 [font-family:'Open_Sans',Helvetica] font-normal text-[#22577a] text-sm"
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#22577a]" />
          </div>
        </div>
      </header>

      <section className="absolute top-[269px] left-0 w-full flex flex-col items-center">
        <h2 className="w-[581px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-[43px] text-center tracking-[0] leading-[63px] whitespace-nowrap">
          Featured Products
        </h2>

        <p className="mt-[52px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-[#efefef] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Discover the latest in premium sneakers and street wear
        </p>
      </section>

      {productCards.map((product) => (
        <Card
          key={product.id}
          className={`absolute ${product.position.top} ${product.position.left} w-[397px] h-[287px] shadow-[0px_4px_4px_#00000040] border-0 bg-transparent overflow-visible`}
        >
          <CardContent className="p-0 relative w-full h-full">
            <img
              className={`absolute top-0 ${product.id === 1 ? "left-0 w-[395px]" : "-left-1 w-[403px]"} h-[287px]`}
              alt="Product background"
              src={product.backgroundImage}
            />

            <Badge className="absolute top-9 left-[47px] h-9 px-5 py-[9px] bg-[#22577a] rounded-lg shadow-[-1px_1px_10px_#00000040,1px_-1px_10px_#00000040] hover:bg-[#22577a] border-0">
              <span
                className={`[font-family:'Open_Sans',Helvetica] ${product.id === 2 ? "[text-shadow:0px_4px_4px_#00000040]" : ""} font-bold text-[#ffffff] text-sm tracking-[1.40px] leading-[normal]`}
              >
                {product.badge}
              </span>
            </Badge>

            {product.productImage && (
              <img
                className={`absolute ${product.productImageStyle.top} ${product.productImageStyle.left} ${product.productImageStyle.width} ${product.productImageStyle.height}`}
                alt="Product"
                src={product.productImage}
              />
            )}

            <p
              className={`absolute ${product.id === 4 ? "top-[172px] left-0" : "top-52 left-[47px]"} w-[174px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap`}
            >
              {product.discount}
            </p>

            <img
              className={`absolute ${product.logoStyle.width} ${product.logoStyle.height} ${product.logoStyle.top} ${product.logoStyle.left}`}
              alt="Brand logo"
              src={product.logoImage}
            />
          </CardContent>
        </Card>
      ))}

      <Card className="absolute top-[300px] left-[1058px] w-[260px] h-[338px] border-0 bg-transparent overflow-visible">
        <CardContent className="p-0 relative w-[260px] h-[327px]">
          <div className="absolute top-[423px] left-0 w-[270px] h-[360px]">
            <div className="absolute w-[96.30%] h-full top-0 left-0 bg-[#22577a] rounded-2xl shadow-[0px_4px_10px_10px_#00000040]" />

            <div className="absolute w-[40.00%] h-[20.54%] top-[17.76%] left-[5.93%] bg-[#ffffff] rounded-[15px] shadow-[0px_4px_4px_#00000040]" />

            <div className="absolute w-[40.00%] h-[20.54%] top-[17.21%] left-[50.00%] bg-[#ffffff] rounded-[15px] shadow-[0px_4px_4px_#00000040]" />

            <p className="absolute top-[86px] left-[calc(50.00%_+_19px)] w-[69px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-[#22577a] text-[16.5px] text-center tracking-[0] leading-[63px] whitespace-nowrap">
              HOURS
            </p>

            <p className="absolute top-[60px] left-[calc(50.00%_+_26px)] w-[55px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-bold text-[#22577a] text-4xl text-center tracking-[0] leading-[63px] whitespace-nowrap">
              7
            </p>

            <p className="absolute top-[86px] left-[calc(50.00%_-_93px)] w-[55px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-[#22577a] text-[16.5px] text-center tracking-[0] leading-[63px] whitespace-nowrap">
              DAYS
            </p>

            <p className="absolute top-[60px] left-[calc(50.00%_-_93px)] w-[55px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-bold text-[#22577a] text-4xl text-center tracking-[0] leading-[63px] whitespace-nowrap">
              06
            </p>

            <h3 className="absolute top-0 left-[calc(50.00%_-_111px)] w-[211px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-bold text-[#ffffff] text-2xl text-center tracking-[0] leading-[63px] whitespace-nowrap">
              Next Drop
            </h3>
          </div>

          <div className="absolute w-full h-[110.20%] top-[-3.06%] left-0 bg-[#ebebeb] rounded-2xl shadow-[0px_4px_10px_10px_#00000040]" />

          <div className="absolute w-full h-[43.43%] top-[66.67%] left-0 bg-[#ffffff] rounded-[15px]" />

          <div className="absolute top-60 left-[30px] w-[185px] h-[98px]">
            <div className="w-[191px] h-[98px] relative">
              <Button className="absolute w-[58.64%] h-[38.78%] top-[61.22%] left-0 bg-[#22577a] rounded-lg shadow-[-1px_1px_10px_#00000040,1px_-1px_10px_#00000040] hover:bg-[#22577a]/90">
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#efefef] text-[15px] text-center tracking-[0] leading-[0.1px]">
                  Shop Now!
                </span>
              </Button>

              <h4 className="absolute top-0 left-[calc(50.00%_-_96px)] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-[#22577a] text-base tracking-[0] leading-[30px] whitespace-nowrap">
                Limited Edition Drop
              </h4>

              <p className="absolute top-7 left-[calc(50.00%_-_96px)] w-[185px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-[#22577acc] text-[13px] tracking-[0] leading-[11px]">
                Get exclusive access to our latest collaboration
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-[1459px] left-[682px] w-40 h-12 flex gap-2">
        {socialIcons.map((icon, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-12 h-12 bg-[#9cf09a] rounded-[10px] hover:bg-[#9cf09a]/90 p-0"
          >
            <img className="w-8 h-8" alt={icon.alt} src={icon.src} />
          </Button>
        ))}
      </div>

      <div className="absolute top-[1474px] left-[269px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff] text-[56px] text-center tracking-[0] leading-[18px] whitespace-nowrap">
        SOLE SOURCE
      </div>

      <img
        className="absolute top-[1450px] left-32 w-[129px] h-[65px]"
        alt="Footer logo"
        src="/add-a-heading--3--1.png"
      />

      <img
        className="absolute top-[1636px] left-[119px] w-[1200px] h-px object-cover"
        alt="Divider line"
        src="/line-41.svg"
      />

      <p className="absolute top-[1660px] left-[647px] w-36 [font-family:'Open_Sans_Hebrew_Condensed-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
        @2025 SOLE SOURCE
      </p>

      {footerImages.map((image, index) => (
        <img
          key={index}
          className={`${image.left} ${image.width} ${image.height} absolute top-[1340px]`}
          alt={image.alt}
          src={image.src}
        />
      ))}
    </div>
  );
};
