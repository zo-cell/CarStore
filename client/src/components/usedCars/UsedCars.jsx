import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  useTheme,
  TextField,
  MenuItem,
} from "@mui/material";
import {FilterList, KeyboardArrowDown, KeyboardArrowUp, HdrAuto, HeatPump, Bolt, Key, CalendarMonth} from '@mui/icons-material';
import Hero from "../home/hero/Hero";
import '../../index.css';


const UsedCars = () => {
    const [isClicked, setIsClicked] = useState({i: 0, t: false});
    const cars = [  
        {  
            "name": "2022 هيونداي النترا",  
            "model": "النترا",  
            "brand": "هيونداي",  
            "color": "أحمر",  
            "kind": "أوتوماتيك",  
            "km": 15000,  
            "country": "القاهرة",
            "price": '2,500,000',
            "mainImage": "/uploads/cardTest.jpg",  
            "subImg1": "/uploads/carTest2.jpg",  
            "subImg2": "/uploads/carTest3.jpg",  
            "subImg3": "/uploads/carTest4.jpg"  
        },  
        {  
            "name": "2021 تويوتا كورولا",  
            "model": "كورولا",  
            "brand": "تويوتا",  
            "color": "أبيض",  
            "kind": "مانيوال",  
            "km": 8000,  
            "country": "الجيزة",  
            "price": '1,800,000',
            "mainImage": "/uploads/carTest5.jpg",  
            "subImg1": "/uploads/carTest6.jpg",  
            "subImg2": "/uploads/carTest7.jpg",  
            "subImg3": "/uploads/carTest8.jpg"  
        },  
        {  
            "name": "2020 نيسان سنترا",  
            "model": "سنترا",  
            "brand": "نيسان",  
            "color": "أسود",  
            "kind": "أوتوماتيك",  
            "km": 20000,  
            "country": "الإسكندرية",
            "price": '2,200,000',
            "mainImage": "/uploads/carTest2.jpg",  
            "subImg1": "/uploads/carTest3.jpg",  
            "subImg2": "/uploads/carTest4.jpg",  
            "subImg3": "/uploads/carTest5.jpg"  
        },  
        {  
            "name": "2019 فورد فوكس",  
            "model": "فوكس",  
            "brand": "فورد",  
            "color": "رمادي",  
            "kind": "مانيوال",  
            "km": 30000,  
            "country": "بورسعيد",  
            "price": '2,000,000',
            "mainImage": "/uploads/carTest8.jpg",  
            "subImg1": "/uploads/carTest6.jpg",  
            "subImg2": "/uploads/carTest7.jpg",  
            "subImg3": "/uploads/cardTest.jpg"  
        },  
        {  
            "name": "2022 كيا سيراتو",  
            "model": "سيراتو",  
            "brand": "كيا",  
            "color": "أزرق",  
            "kind": "أوتوماتيك",  
            "km": 5000,  
            "country": "أسوان",  
            "price": '2,500,000',
            "mainImage": "/uploads/carTest5.jpg",  
            "subImg1": "/uploads/carTest4.jpg",  
            "subImg2": "/uploads/carTest2.jpg",  
            "subImg3": "/uploads/carTest6.jpg"  
        }  
    ]
    return (
        <div>
            <Hero />

            <Box
              sx={{
                mx: 20,
                mt: 2,
                boxShadow: "0 0 20px rgba(0, 0, 0, .2)",
                borderRadius: 5,
                px: 3,
                direction: 'rtl',
                bgcolor: '#fff',
                pb: 10,
              }}
            >
                {/* header */}
                <Box sx={{ width: '100%', pt: 10, pb: 5 }}>
                    <Typography sx={{ color: "#4a4c4a", fontWeight: 'bold', direction: "rtl", fontSize: 23, textAlign: 'center', mb: 2 }}>
                        سوق السيارات : سيارة مستعملة للبيع في مصر
                    </Typography>

                    <Typography sx={{ color: "#2229", direction: "rtl", fontSize: 18, display: 'flex', }}>
                        <Typography sx={{ color: "#2229", direction: "rtl", fontSize: 18, fontWeight: 'bold', width: 120, height: '30px' }}>سيارات للبيع ،</Typography>
                        <Typography sx={{ color: "#2229", direction: "rtl", fontSize: 18 }}>سوق السيارات المستعملة يحتوي علي أكثر من 35273 سيارة للبيع في مصر ، تستطيع البحث عن أي ماركة و موديل أو مدينة أو عدد الكيلوميترات أو السعر بسهولة وسرعة .</Typography>
                    </Typography>
                </Box>

                {/* Marks Filter */}
                <Box  sx={{ width: "100%", bgcolor: '#fff', borderRadius: 2, cursor: 'pointer', boxShadow: '0 5px 10px #0005', transition: '.5s', '&:hover': { boxShadow: '0px 5px 25px #0005' } }}>
                    <Box className='filterContainer'>
                        <Box
                        className='siteFilterTab'
                        
                        >
                        
                            <img src="/uploads/smallCarIcon.png" alt="icon" style={{ width: 30, height: 30, opacity: .5 }}/> 
                        
                            <Typography
                            
                                sx={{
                                color: "#7c7c7c",
                                direction: "rtl",
                                fontSize: 15,
                                fontWeight: 'bold',
                                // py: 1,
                                // borderBottom: "1px solid #3160a6",
                                // width: "fit-content",
                                }}
                            >
                                إخترماركة
                            </Typography>
                        
                            
                        </Box>
                    </Box>

                    <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ flexWrap: "wrap", pb: 4 }}
                    >
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/toyota1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/skuda1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/sheforle1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/reno1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/nissan1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/mg1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/metso1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/marcedis1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/kia1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/hyundai1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/fiat1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    <Box className='MarkBox' sx={{ width: 140, p: 2 }}>
                        <img
                        src={"/uploads/nissan1.png"}
                        alt="logo"
                        width={70}
                        height={70}
                        />
                    </Box>
                    </Stack>

                    <Box sx={{ width: '100%', borderTop: '1px solid #ddd', py: 2 }}>
                        <Typography variant="h6" sx={{ direction: "rtl", textAlign: 'center', color: '#418eec', fontSize: 15, fontWeight: 'bold' }}>موديلات اخري</Typography>
                    </Box>
                </Box>

                {/* Car filter by order mini bar */}
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ my: 4, bgcolor: '#ebf2fa', width: '60%', py: 1.5, px: 3, borderRadius: 2 }}>
                    <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', direction: 'rtl' }}>
                        <FilterList sx={{ width: 20 }} />
                        <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#4a4c4a' }}>رتب حسب</Typography>
                    </Box>

                    <Box onClick={() => setIsClicked({i:1, t: isClicked.i === 1 ? !isClicked.t : true})} sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, py: .5, borderRadius: 2, bgcolor: (isClicked.i === 1 && isClicked.t) ? '#fff' : '#f5f9fd', cursor: 'pointer', transition: '.9s' }}>
                        <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: isClicked === 1 ? '#3160a6' : '#a6bfe0', transition: '.9s' }}>المضاف حديثا</Typography>
                        {(isClicked.i === 1 && isClicked.t) ? (
                            <KeyboardArrowDown sx={{ width: 20 }} />
                        ) : (
                            <KeyboardArrowUp sx={{ width: 20, opacity: .5 }} />
                        )}
                        
                    </Box>

                    <Box onClick={() => setIsClicked({i:2, t: isClicked.i === 2 ? !isClicked.t : true})} sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, py: .5, borderRadius: 2, bgcolor: (isClicked.i === 2 && isClicked.t) ? '#fff' : '#f5f9fd', cursor: 'pointer', transition: '.9s' }}>
                        <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: isClicked === 2 ? '#3160a6' : '#a6bfe0', transition: '.9s' }}>السعر</Typography>
                        {(isClicked.i === 2 && isClicked.t) ? (
                            <KeyboardArrowDown sx={{ width: 20 }} />
                        ) : (
                            <KeyboardArrowUp sx={{ width: 20, opacity: .5 }} />
                        )}
                    </Box>

                    <Box onClick={() => setIsClicked({i:3, t: isClicked.i === 3 ? !isClicked.t : true})} sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, py: .5, borderRadius: 2, bgcolor: (isClicked.i === 3 && isClicked.t) ? '#fff' : '#f5f9fd', cursor: 'pointer', transition: '.9s' }}>
                        <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: isClicked === 3 ? '#3160a6' : '#a6bfe0', transition: '.9s' }}>كم</Typography>
                        {(isClicked.i === 3 && isClicked.t) ? (
                            <KeyboardArrowDown sx={{ width: 20 }} />
                        ) : (
                            <KeyboardArrowUp sx={{ width: 20, opacity: .5 }} />
                        )}
                    </Box>

                    <Box onClick={() => setIsClicked({i:4, t: isClicked.i === 4 ? !isClicked.t : true})} sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, py: .5, borderRadius: 2, bgcolor: (isClicked.i === 4 && isClicked.t) ? '#fff' : '#f5f9fd', cursor: 'pointer', transition: '.9s' }}>
                        <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: isClicked === 4 ? '#3160a6' : '#a6bfe0', transition: '.9s' }}>السنة</Typography>
                        {(isClicked.i === 4 && isClicked.t) ? (
                            <KeyboardArrowDown sx={{ width: 20 }} />
                        ) : (
                            <KeyboardArrowUp sx={{ width: 20, opacity: .5 }} />
                        )}
                    </Box>
                </Stack>


                <Stack direction={'column'} justifyContent={'center'} alignItems={'cneter'} gap={2}>

                    {/* Card */}
                    {cars.map((car, i) => (
                        
                    <Stack key={i} className="SalesPageCardBox" direction={'row'} justifyContent={'right'} alignItems={'center'} sx={{ width: '100%', height: 238, borderRadius: 2, boxShadow: '0 5px 10px #0005', transition: '.5s', '&:hover': { boxShadow: '0px 5px 25px #0005' } }}>
                    {/* Image Box */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', width: 250, height: '100%', borderLeft: '1px solid #ddd7', p: 1.5 }}>

                        <Box className="MainImageBox" sx={{ width: '100%', height: '75%', borderRadius: 3, overflow: 'hidden', cursor: 'pointer' }}>
                            <img src={car.mainImage} alt="image" style={{ width: '100%', height: '100%', borderRadius: 3, transition: '.4s' }} />
                        </Box>

                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ height: '20%', width: '100%' }}>
                            <Box sx={{ height: '100%', width: '30%', borderRadius: 3 }}>
                                <img src={car.subImg1} alt="image" style={{ width: '100%', height: '100%', borderRadius: 3 }} />
                            </Box>
                            <Box sx={{ height: '100%', width: '30%', borderRadius: 3 }}>
                                <img src={car.subImg2} alt="image" style={{ width: '100%', height: '100%', borderRadius: 3 }} />
                            </Box>
                            <Box sx={{ height: '100%', width: '30%', borderRadius: 3 }}>
                                <img src={car.subImg3} alt="image" style={{ width: '100%', height: '100%', borderRadius: 3 }} />
                            </Box>
                        </Stack>

                    </Box>

                    {/* Information Box */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column', flex: 1, pt: 2 }}>
                        <Typography variant="h5" sx={{ direction: 'rtl', fontWeight: 'bold', color: '#3160a6', transition: '.9s', mr: 5, mb: 2 }}>{car.name}</Typography>

                        <Stack direction={'row'} justifyContent={'right'} alignItems={'center'} gap={1} sx={{ mr: 5, mb: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.brand}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.model}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.color}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.kind}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.km}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5 }}>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>{car.country}</Typography>
                            </Box>
                        </Stack>


                        <Stack direction={'row'} justifyContent={'right'} alignItems={'center'} gap={2} sx={{ mr: 5, mb: 3 }}>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, bgcolor: '#ddd5', borderRadius: 5, gap: .5 }}>
                                <CalendarMonth sx={{ width: 15 }}/>
                                <Typography sx={{ direction: 'rtl', fontSize: 15, fontWeight: 'bold', color: '#3160a6', transition: '.9s' }}>2024-08-16</Typography>
                            </Box>


                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: .5 }}>
                                
                                <HdrAuto />
                                
                                <HeatPump />

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#2b3445', borderRadius: '50%' }}>
                                    <Bolt sx={{ color: '#fff', width: 20, height: 20 }}/>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#2b3445', borderRadius: '50%', p: .2 }}>
                                    <Key sx={{ color: '#fff', width: 17, height: 17 }}/>
                                </Box>
                                
                            </Box>


                        </Stack>


                        {/* Price Box */}
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', pr: 5, py: 2, bgcolor: '#f6f6f6', borderBottomLeftRadius: 5 }}>
                            <Typography sx={{ direction: 'rtl', fontSize: 20, fontWeight: 'bold',
                            color: '#222', transition: '.9s' }}>{car.price} جنيه</Typography>
                        </Box>
                        
                    </Box>

                </Stack>
                    ))}
                    
                </Stack>
            </Box>
        </div>
    );
}

export default UsedCars;
