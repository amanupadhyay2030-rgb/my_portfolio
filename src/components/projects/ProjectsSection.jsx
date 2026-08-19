import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/projects';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { ProjectLifecycle } from './ProjectLifecycle';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection = () => {
  const categories = ['All', 'Web', 'Backend', 'IoT', 'LMS', 'Automation'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeCategory === 'All') return true;
    return (
      proj.category.toLowerCase() === activeCategory.toLowerCase() ||
      proj.subCategory.toLowerCase().includes(activeCategory.toLowerCase()) ||
      proj.technologies.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
    );
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 text-xs font-mono font-semibold mb-3 border border-indigo-500/20">
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 light:text-slate-900 tracking-tight">
            Things I've{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 light:from-indigo-600 light:to-cyan-600 bg-clip-text text-transparent">
              Built.
            </span>
          </h2>

          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg mt-4">
            Real-world projects combining development, enterprise software and problem solving — featuring HRMS, PRAYAS Student Recruitment Portal & PRAYAS Automation Academy.
          </p>
        </motion.div>

        {/* Category Filter */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedCaseStudy}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Lifecycle Timeline */}
        <ProjectLifecycle />

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <ProjectCaseStudyModal
            project={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}

      </div>
    </section>
  );
};
