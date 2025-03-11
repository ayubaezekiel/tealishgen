import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WorkflowNodeProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  position?: { x: number; y: number };
  onDragEnd?: (event: any, info: any) => void;
  isSelected?: boolean;
  onClick?: () => void;
}

const WorkflowNode = ({
  title = "Sample Node",
  description = "This is a sample workflow node",
  icon = null,
  position = { x: 0, y: 0 },
  onDragEnd = () => {},
  isSelected = false,
  onClick = () => {},
}: WorkflowNodeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            drag
            dragMomentum={false}
            onDragEnd={onDragEnd}
            initial={position}
            className="absolute cursor-pointer"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: isSelected ? 1.1 : 1,
              boxShadow: isSelected ? "0 0 0 2px hsl(var(--primary))" : "none",
            }}
          >
            <Card
              className={`w-[100px] md:w-[130px] lg:w-[180px] p-2 md:p-3 lg:p-4 bg-background border-2 ${isSelected ? "border-primary" : "border-border"} transition-colors`}
            >
              <div className="flex items-center gap-3">
                {icon}
                <div className="flex-1">
                  <h3 className="font-medium text-[11px] md:text-sm text-foreground leading-tight">
                    {title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground truncate leading-tight">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WorkflowNode;
