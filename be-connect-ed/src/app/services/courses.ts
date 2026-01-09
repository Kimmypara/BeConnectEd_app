import { Injectable } from '@angular/core';

export interface Course {
  course_id: number;
  course_code: string;
  course_description: string;
  course_name: string;
  course_duration: string;
  is_active: boolean; 
  MQF_Level: number;
  course_credits: number;
}

export interface Unit {
  unit_id: number;
  unit_code: string;
  unit_name: string;
  unit_description?: string;
  is_active: boolean;
  unit_duration: string;
  ects_credits: number;
}

export interface IndependentCourse {
  id: number;
  title: string;
  description: string;
  unitIds: number[];
  createdByEmail: string;
}


@Injectable({ providedIn: 'root' })
export class CoursesService {
  public courseList: Course[] = [];
  public unitList: Unit[] = [];

  constructor() {
    this.populateCourseList();
    this.populateUnitList();
  }

  populateCourseList() {
    this.courseList = [
      {
        course_id: 1,
        course_code: 'CA4-A03-23',
        course_description:
          'This course provides fundamental knowledge of printing, print production and finishing. The programme also provides a formation in a range of skills and techniques, personal qualities and attitudes essential for successful employment. Learners will harness theoretical knowledge at the Institute, backed up by practical apprenticeship within the printing industry.',
        course_name: 'Advanced Diploma in Graphic Printing',
        course_duration: '2 years',
        is_active: true,
        MQF_Level: 4,
        course_credits: 120,
      },
            {
        course_id: 2,
        course_code: ' CA4-W05-24',
        course_description:
          'The programme provides guided vocational learning in art and design as well as relevant key competences. It equips learners with the foundations required to undertake further studies in various specialist areas at undergraduate level. During the course, learners build a portfolio of student work that hones in their skills and gradually orients their focus in the direction they intend to follow in their career. The programme has an element of work-based learning through which students experience some contact with industry. Special attention is also given to visual and written communication in preparation for self-promotion and entrepreneurship after their studies.',
        course_name: 'Advanced Diploma in Art and Design',
        course_duration: '2 years',
        is_active: true,
        MQF_Level: 4,
        course_credits: 120,
      },
            {
        course_id: 3,
        course_code: ' CA4-A02-23',
        course_description:
          'This course addresses needs in the cultural heritage sector in order to support the management, conservation, preservation and care of such heritage. Successful candidates will be able to ethically collaborate with relevant stakeholders, and would work under the supervision of a heritage professional. The programme of studies provides the necessary applied theoretical material and ethical background in technical aspects of cultural heritage and heritage skills, including: stone, wood, metals, books, paper and textiles heritage skills, with training being carried out in workshops, laboratories and on site. The course also has an apprenticeship, which allows learners the opportunity to work alongside professionals and immerse themselves in the world of cultural heritage while receiving the necessary training in a learning environment. Graduands of this programme can access the Bachelor in Conservation and Restoration Studies (Hons) course at the same Institute.',
        course_name: 'Advanced Diploma in Cultural Heritage Skills',
        course_duration: '2 years',
        is_active: true,
        MQF_Level: 4,
        course_credits: 120,
      },
        {
        course_id: 4,
        course_code: ' CA4-A01-23',
        course_description:
          'This course is designed to address the skills shortages in the fashion design and production sector. Learners will acquire important skills required for the fashion retail sector, together with basic entrepreneurial knowledge to support those learners who would like to set up their own atelier in the future. The first year of the programme offers learners the cultural, theoretical and creative aspects of the subject. Another important area is pattern drafting and sewing techniques, in preparation for the second year. The second year of studies provides learners with the opportunity to develop further their knowledge and skills in the specialisation. They will follow an apprenticeship as well as present their own design concepts in a fashion collection as their final major project.',
        course_name: 'Advanced Diploma in Fashion and Retail',
        course_duration: '2 years',
        is_active: true,
        MQF_Level: 4,
        course_credits: 120,
      },
    ];  
  }

 populateUnitList() {
    this.unitList = [
      {
  unit_id:1,
  unit_code: 'CAGDN-406-1701',
  unit_name: ' Contextual Studies in Graphic Design',
  unit_description: 'Graphic Design reflects, translates and communicates social, political and cultural issues ecology, environment, politics, war, health, education and welfare – visually.In understanding this, the learner is encouraged to interpret, develop and nurture own ideas and communicate observations in contemporary language, which informs and defines own specialist area of interest in design learning towards integration within the creative industry. ',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:2,
  unit_code: 'CAART-406-1625',
  unit_name: ' Exploring Digital Media',
  unit_description: 'This is a practical skill based unit where students will demonstrate an understanding of digital media applications in a creative context. Learners will demonstrate the ability to use required tools and techniques for digital imaging. Learners should show proficient uses of graphic design software and demonstrate this through a portfolio of work. ',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:3,
  unit_code: 'CAMED-406-1607',
  unit_name: 'Interactive Media Fundamentals',
  unit_description: 'With the ever-increasing demand for social connectivity, interactive media products have become commonplace as a communication tool between the businesses and the individual. The increase in popularity within this field has shifted the designer’s role into bringing fitness for purpose and usability to the forefront of interactive product development. For this reason, practitioners must have a fundamental understanding of the design principles required to produce effective interactive media products. This unit provides a practical basis for learners to study the role and use of interactive media products within the industry, and should stipulate a basis for future career opportunities in interactive product creation. ',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:4,
  unit_code: 'CAFOT-406-1601',
  unit_name: 'Photographic Media, Techniques and Technology',
  unit_description: 'The aim of this unit is to develop knowledge, understanding and skills across the range of processes involved in different photographic media, techniques and technology which contribute to the creative photographic process. At the end of the unit, learners will be able to use this knowledge in the creation of their own photographic images. Through experimentation and learning over a long period of time, a range of skills and techniques have been developed which professional photographers employ and adapt to their own uses. In many cases, a photographer’s choice of materials and techniques can create a unique “look” which can become identified with a particular photographer. In the past such identities have made some photographers internationally famous. Some processes involve working with potentially harmful equipment which have health and safety implications. Therefore, learners must be made aware of these implications so that they can work safely without exposing themselves and others to harm. Digital technologies have largely replaced the use of film in photography.',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:5,
  unit_code: 'CAART-406-1611',
  unit_name: 'Principles of Design',
  unit_description: 'This unit aims to build the necessary skills and knowledge required by learners to investigate and comprehend Graphic Design practice and the social, historical and cultural events, theories and debates, with contextual reference and relevance to contemporary developments. Learners will use the knowledge and understanding of historical and contemporary Graphic Design gained in this unit to further inform and develop their practice within their specialist field of study and in the wider context of professional practice. ',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:6,
  unit_code: 'CAART-406-1622',
  unit_name: 'Visual Communication',
  unit_description: 'This unit introduces a number of design methods and techniques. And aims further, for students to develop skills in communicating ideas visually and succeed an ability of a design practitioner to effectively communicate a message. Different contexts require different means of communication, varying from artistic impressions to commercial persuasion. This unit will therefore introduce learners to a variety of visual communication tools and techniques, to prepare them for more specialized subjects. Students will learn to appropriately apply traditional and digital techniques, whilst encouraged to experiment and develop own ways and styles to convey information ',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
   {
  unit_id:7,
  unit_code: 'CDKSK-402-2324',
  unit_name: 'Community Social Responsibility',
  unit_description: 'This unit focuses on Community Social Responsibility and provides an opportunity for learners to better understand themselves and others to establish life goals. Community social responsibility enables learners to understand their strengths, areas for improvement, opportunities offered to them during their lifespan and threats which can hinder their achievements. This unit will prepare students for life, employment and how to become active citizens in society. ',
  is_active: true,
  unit_duration: '50 hours',
  ects_credits: 2,
  },
  {
  unit_id:8,
  unit_code: 'CDKSK-406-2319',
  unit_name: 'English',
  unit_description: 'This unit typically refers to English language skills needed for specific careers or vocational training programmes. The main objective of this unit is to prepare learners to understand and respond to spoken English on a variety of topics, including abstract or unfamiliar topics, to read and comprehend a variety of texts, including more extended and more complex texts, and to write in a more precise and structured way. Particular focus is given to summarising and paraphrasing.',
  is_active: true,
  unit_duration: '150 hours',
  ects_credits: 6,
  },
    ];
  }
}
