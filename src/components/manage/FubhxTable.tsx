import React, { useState } from 'react';
import { Search, Filter, Plus, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TableView from './views/TableView';
import GridView from './views/GridView';
import ListView from './views/ListView';
import KanbanView from './views/KanbanView';
import { fubhxItems } from './fubhx-data';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

interface FubhxTableProps {
  viewType?: 'table' | 'grid' | 'list' | 'kanban';
  categoryId?: string;
  fubhxId?: string | null;
}

const FubhxTable = ({ viewType = 'table', categoryId = 'private', fubhxId = 'overview' }: FubhxTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [moveDialogOpen, setMoveDialogOpen] = useState(false);
  const [targetFubhx, setTargetFubhx] = useState<string>('');
  
  const getActiveFubhxName = () => {
    const categories = [
      {
        id: 'shared',
        items: [
          { id: 'shared-1', name: 'Second Brain' },
          { id: 'shared-2', name: 'OSS' },
          { id: 'shared-3', name: 'Artificial Intelligence' },
        ]
      },
      {
        id: 'team',
        items: [
          { id: 'team-1', name: 'Brainboard Competitors' },
          { id: 'team-2', name: 'Visualize Terraform' },
          { id: 'team-3', name: 'CI/CD Engine' },
        ]
      },
      {
        id: 'private',
        items: [
          { id: 'overview', name: 'Overview' },
          { id: 'private-1', name: 'UXUI' },
          { id: 'private-2', name: 'Space' },
          { id: 'private-3', name: 'Cloud Computing' },
        ]
      }
    ];
    
    if (fubhxId === null) {
      return "All";
    }
    
    const category = categories.find(c => c.id === categoryId);
    if (!category) return "Unknown";
    
    const item = category.items.find(i => i.id === fubhxId);
    return item ? item.name : "Unknown";
  };
  
  const getFilteredItems = () => {
    const activeFubhxName = getActiveFubhxName().toLowerCase();
    
    if (fubhxId === 'overview') {
      return searchQuery 
        ? fubhxItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.writer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : fubhxItems;
    }
    
    let fubhxFiltered = fubhxItems.filter(item => 
      item.keywords.some(keyword => keyword.toLowerCase() === activeFubhxName.toLowerCase())
    );
    
    if (fubhxFiltered.length === 0) {
      fubhxFiltered = fubhxItems.filter(item => 
        item.keywords.some(keyword => keyword.toLowerCase().includes(activeFubhxName.toLowerCase())) ||
        item.title.toLowerCase().includes(activeFubhxName.toLowerCase())
      );
    }
    
    return searchQuery 
      ? fubhxFiltered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.writer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : fubhxFiltered;
  };
  
  const filteredItems = getFilteredItems();

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleMoveItems = () => {
    if (!targetFubhx) return;
    
    toast.success(`Moved ${selectedItems.length} items to ${targetFubhx}`);
    setSelectedItems([]);
    setMoveDialogOpen(false);
    setTargetFubhx('');
  };

  const fubhxOptions = [
    { id: 'shared-1', name: 'Second Brain' },
    { id: 'shared-2', name: 'OSS' },
    { id: 'shared-3', name: 'Artificial Intelligence' },
    { id: 'team-1', name: 'Brainboard Competitors' },
    { id: 'team-2', name: 'Visualize Terraform' },
    { id: 'team-3', name: 'CI/CD Engine' },
    { id: 'private-1', name: 'UXUI' },
    { id: 'private-2', name: 'Space' },
    { id: 'private-3', name: 'Cloud Computing' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search fubhx..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {selectedItems.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setMoveDialogOpen(true)}>
              <Move size={16} className="mr-2" />
              Move ({selectedItems.length})
            </Button>
          )}
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            New Fubhx
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <p>No fubhx items found for this section.</p>
          </div>
        ) : (
          <>
            {viewType === 'table' && (
              <TableView 
                items={filteredItems} 
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'grid' && (
              <GridView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'list' && (
              <ListView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'kanban' && <KanbanView items={filteredItems} />}
          </>
        )}
      </div>

      <Dialog open={moveDialogOpen} onOpenChange={setMoveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Move to Fubhx</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Select onValueChange={setTargetFubhx} value={targetFubhx}>
              <SelectTrigger>
                <SelectValue placeholder="Select target fubhx" />
              </SelectTrigger>
              <SelectContent>
                {fubhxOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setMoveDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleMoveItems} disabled={!targetFubhx}>
              Move Items
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FubhxTable;
